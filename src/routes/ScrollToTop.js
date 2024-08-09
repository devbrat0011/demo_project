import { useEffect } from 'react';
import { createBrowserHistory } from "history";
function ScrollToTop() {
  const history = createBrowserHistory({window});
  console.log("history",history)
    useEffect(() => {
      const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
      });
      return () => {
        unlisten();
      }
    }, []);
  
    return (null);
  }
  
  export default ScrollToTop