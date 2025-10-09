// Proxy module: re-export the JSX implementation so bundlers that resolve .js first
// don't attempt to parse JSX inside a .js file.
import SplashCursor from './SplashCursor.jsx';
export default SplashCursor;
