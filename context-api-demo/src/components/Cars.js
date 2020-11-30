
import { Car } from './Car';
import { Fragment } from 'react';
import MyContext from '../MyContext';

export const Cars = () => (
    <MyContext.Consumer>
        {({cars,incrementCarPrice,decrementCarPrice}) => (
            <Fragment>
                <h4>Cars:</h4>
                {/* Finally we can use data */}
                {Object.keys(cars).map(carID => (
                    <Car
                        key={carID}
                        name={cars[carID].name}
                        price={cars[carID].price}
                        incrementPrice={() => incrementCarPrice(carID)}
                        decrementPrice={() => decrementCarPrice(carID)}
                    />
                ))}
            </Fragment>
        )}

    </MyContext.Consumer>
);