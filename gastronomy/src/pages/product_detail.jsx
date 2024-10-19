import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image, Button, Card, Carousel } from 'react-bootstrap';
import { Cart, Trash, CreditCard } from 'react-bootstrap-icons';
import axios from 'axios';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon, Stroke, Text, Fill } from 'ol/style';
import LineString from 'ol/geom/LineString';
import nacatamal1 from '../media/nacatamal1.png'
import vigoron from '../media/vigoron.jpg'
import carne_asada from '../media/carne_asada.jpeg'
import sopa_mondongo from '../media/sopa_mondongo.jpg'
import iconmap from '../media/iconmap.png'

const product = {
  id: 1,
  name: 'Nacatamal',
  price: 60,
  description: 'El Nacatamal es un platillo tradicional nicaragüense, hecho de masa de maíz rellena de carne de cerdo, arroz, papas, y envuelto en hojas de plátano.',
  image: nacatamal1,
};

const relatedProducts = [
  { id: 2, name: 'Vigorón', price: 150, image: vigoron },
  { id: 3, name: 'Carne Asada', price: 200, image: carne_asada },
  { id: 4, name: 'Sopa de Mondongo', price: 200, image: sopa_mondongo },
];

const mapContainerStyle = {
  width: '100%',
  height: '600px'
};

export function ProductDetailPage() {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [route, setRoute] = useState(null);
  const mapRef = useRef();
  const mapObject = useRef(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        fetchNearbyRestaurants(latitude, longitude);
      },
      (error) => {
        console.error("Error getting user's location:", error);
      },
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    if (userLocation && mapRef.current) {
      if (!mapObject.current) {
        mapObject.current = new Map({
          target: mapRef.current,
          layers: [
            new TileLayer({
              source: new OSM()
            })
          ],
          view: new View({
            center: fromLonLat([userLocation.lng, userLocation.lat]),
            zoom: 15
          })
        });
      } else {
        mapObject.current.getView().setCenter(fromLonLat([userLocation.lng, userLocation.lat]));
      }

      updateMapMarkers();
    }
  }, [userLocation, selectedRestaurant, route]);

  const fetchNearbyRestaurants = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://overpass-api.de/api/interpreter?data=[out:json];(node["amenity"="restaurant"](around:1000,${lat},${lon}););out;`
      );
      const restaurants = response.data.elements.map(item => ({
        name: item.tags.name || 'Restaurante sin nombre',
        location: { lat: item.lat, lng: item.lon }
      }));
      setNearbyRestaurants(restaurants);
    } catch (error) {
      console.error('Error fetching nearby restaurants:', error);
    }
  };

  const fetchRoute = async (start, end) => {
    try {
      const response = await axios.get(
        `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`
      );
      const coordinates = response.data.routes[0].geometry.coordinates;
      
      // Ensure the route starts exactly at the user's location
      const firstCoord = coordinates[0];
      if (firstCoord[0] !== start.lng || firstCoord[1] !== start.lat) {
        coordinates.unshift([start.lng, start.lat]);
      }
      
      // Ensure the route ends exactly at the restaurant location
      const lastCoord = coordinates[coordinates.length - 1];
      if (lastCoord[0] !== end.lng || lastCoord[1] !== end.lat) {
        coordinates.push([end.lng, end.lat]);
      }
      
      setRoute(coordinates);
    } catch (error) {
      console.error('Error fetching route:', error);
    }
  };

  const updateMapMarkers = () => {
    if (!mapObject.current || !userLocation) return;

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    mapObject.current.getLayers().getArray()
      .filter(layer => layer instanceof VectorLayer)
      .forEach(layer => mapObject.current.removeLayer(layer));

    mapObject.current.addLayer(vectorLayer);

    const userFeature = new Feature({
      geometry: new Point(fromLonLat([userLocation.lng, userLocation.lat]))
    });

    userFeature.setStyle(new Style({
      image: new Icon({
        src: iconmap,
        scale: 0.2,
        color: '#3399CC'
      }),
      text: new Text({
        text: 'Ubicación Actual',
        offsetY: -20,
        font: 'bold 14px Arial',
        fill: new Fill({color: '#000'}),
        stroke: new Stroke({color: '#fff', width: 3})
      })
    }));

    vectorSource.addFeature(userFeature);

    if (selectedRestaurant) {
      const restaurantFeature = new Feature({
        geometry: new Point(fromLonLat([selectedRestaurant.location.lng, selectedRestaurant.location.lat]))
      });

      restaurantFeature.setStyle(new Style({
        image: new Icon({
          src: iconmap,
          scale: 0.2
        }),
        text: new Text({
          text: selectedRestaurant.name,
          offsetY: -20,
          font: 'bold 14px Arial',
          fill: new Fill({color: '#000'}),
          stroke: new Stroke({color: '#fff', width: 3})
        })
      }));

      vectorSource.addFeature(restaurantFeature);

      if (route) {
        const routeCoords = route.map(coord => fromLonLat(coord));
        const routeFeature = new Feature({
          geometry: new LineString(routeCoords)
        });

        routeFeature.setStyle(new Style({
          stroke: new Stroke({
            color: '#0080ff',
            width: 4
          })
        }));

        vectorSource.addFeature(routeFeature);
      }

      // Fit the view to include both points and the route
      const extent = vectorSource.getExtent();
      mapObject.current.getView().fit(extent, { padding: [50, 50, 50, 50] });
    } else {
      // If no restaurant is selected, center the map on the user's location
      mapObject.current.getView().setCenter(fromLonLat([userLocation.lng, userLocation.lat]));
      mapObject.current.getView().setZoom(15);
    }
  };

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    if (userLocation) {
      fetchRoute(userLocation, restaurant.location);
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <h3 className="text-dark">C$ {product.price}.00</h3>
          <p>{product.description}</p>
          <div className="d-flex gap-2 mb-3">
            <Button variant="success" size="sm">
              <Cart className="me-1" /> Agregar a compras
            </Button>
            <Button variant="danger" size="sm">
              <Trash className="me-1" /> Eliminar compras
            </Button>
            <Button variant="warning" size="sm">
              <CreditCard className="me-1" /> Comprar ahora
            </Button>
          </div>
        </Col>
      </Row>

      <h3 className="text-center mt-5">Productos relacionados</h3>
      <Carousel>
        {relatedProducts.map((relatedProduct, index) => (
          <Carousel.Item key={relatedProduct.id}>
            <Row>
              <Col md={12} className="text-center">
                <Image src={relatedProduct.image} alt={relatedProduct.name} fluid />
                <h5>{relatedProduct.name}</h5>
                <p>C$ {relatedProduct.price}.00</p>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <h3 className="mt-5 mb-3">Restaurantes que ofrecen este platillo cerca de ti</h3>
      <Row>
        {nearbyRestaurants.map((restaurant, index) => (
          <Col md={4} key={index}>
            <Card className="mb-3 hover-float">
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={() => handleSelectRestaurant(restaurant)}
                >
                  Ver ruta
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="mt-5 mb-3">Mapa de restaurantes</h3>
      <div ref={mapRef} style={mapContainerStyle}></div>

      <style>
        {`
          .hover-float {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
          .hover-float:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
        `}
      </style>
    </Container>
  );
}
