import { NonIdealState } from '@blueprintjs/core';
import React from 'react';

function App() {
    return (
        <div
            className="bp4-dark"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
            }}>
            <NonIdealState
                icon="take-action"
                title={(<h1>UH OH!</h1>)}
                description="The UW-Stout Involvement Center had finally shut us down. We'll be back soon! (Hopefully)"
            />
        </div>
    );
}

export default App;
