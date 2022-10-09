import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { coordinates } from '@constants';
import { MapBox } from './styled';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN as string;

export default () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [40, 40],
      zoom: 2.5,
    });

    coordinates.features.map((feature) =>
      new mapboxgl.Marker().setLngLat(feature.geometry.coordinates as [number, number]).addTo(map)
    );

    return () => map.remove();
  }, []);

  return <MapBox ref={mapContainerRef} />;
};
