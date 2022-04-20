import { YMaps, Map, GeolocationControl, RulerControl, RoutePanel} from 'react-yandex-maps';
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
                <RulerControl options={{ float: 'left' }} />
                <RoutePanel options={{float: "left"}} />

            </Map>
        </div>
    </YMaps>
);


export default MapYandex;