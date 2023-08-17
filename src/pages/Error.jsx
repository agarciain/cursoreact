import {Footer} from '../components';

export const Error = () => {
    return (
        <div className="container mb-3">
            <div className="bg-warning border-top p-4 text-white">
                <p className="display-6">El item ingresado no existe</p>
            </div>  
            <div>
                <Footer />
            </div>
        </div>
    );

}