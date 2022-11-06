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
                60+mph winds took out our power along with <br />
                <a href="https://www.fox6now.com/news/power-outages-strong-winds-cedarburg">everyone else in Southeastern Wisconsin.</a><br />
                We should be back soon (hopefully).<br />
                <br />
                Please, redirect all of your shit comments to {' '}
                <a href="mailto:me@uwstout.wtf">
                    Me<span style={{ fontSize: 10 }}>@UWStout.WTF</span>
                </a>
                .
            </p>
        </div>
    );
}

export default App;
