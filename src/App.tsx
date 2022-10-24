import { Icon } from '@blueprintjs/core';

function App() {
    return (
        <div
            className="bp4-dark"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '100vh',
                width: '100vw',
            }}>
            <Icon
                icon="warning-sign"
                iconSize={100}
                color="yellow"
            />
            <h1 style={{
                fontSize: 64,
                marginTop: 20,
                marginBottom: 20,
            }}>
                UH OH!
            </h1>
            <p>
                Looks like UW-Stout had finally shut us down. We'll be back soon! (Hopefully) <br />
                Please, redirect all of your comments to {' '}
                <a href="mailto:me@uwstout.wtf">
                    Me<span style={{ fontSize: 10 }}>@UWStout.WTF</span>
                </a>
                .
            </p>
        </div>
    );
}

export default App;
