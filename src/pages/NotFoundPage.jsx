import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <div className="container">
                <div className="not-found-content">
                    <h1 className="not-found-title">404</h1>
                    <p className="not-found-subtitle">Seite nicht gefunden</p>
                    <p className="not-found-text">
                        Die angeforderte Seite existiert nicht oder wurde verschoben.
                    </p>
                    <Link to="/" className="btn btn-home">
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;

