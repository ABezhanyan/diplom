import { YMaps, Map, GeolocationControl, FullscreenControl } from 'react-yandex-maps';
import './Map.scss'

const MapYandex = () => (
    <YMaps>
        <div className='ya'>
            <Map className="map" 
                defaultState={{ 
                    center: [55.75, 37.57], 
                    zoom: 10, 
                
                }} 

                
            >
                <GeolocationControl options={{ float: 'right' }} />
                <FullscreenControl options={{ float: 'left' }} />
            </Map>
        </div>
    </YMaps>
);


export default MapYandex;