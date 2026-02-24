export default function NotFound() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'system-ui, sans-serif' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0' }}>404</h1>
            <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>We couldn't find the page you were looking for.</p>
            <a href="/" style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', backgroundColor: '#000', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
                Return Home
            </a>
        </div>
    );
}
