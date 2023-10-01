import { useEffect } from 'react';
import { GetStoreData } from './Components/ReusableComponents/ReduxActions/Index';
import SideMenu from './SideMenu/Index';
import './App.css';

function App() {
  const ActiveReducerName = GetStoreData("ActiveReducer");
  const ActiveReducerData=GetStoreData(ActiveReducerName);
    useEffect(() => {
      console.log("hhh")
      const handleBeforeUnload = event => {
        if (ActiveReducerData?.isEditMode) {
          const confirmationMessage =
            'You have unsaved changes. Are you sure you want to leave?';
          event.returnValue = confirmationMessage; // Standard for most browsers
          return confirmationMessage; // For some older browsers
        }
      };

      // const handlePopstate = () => {
      //   if (ActiveReducerData?.isEditMode) {
      //     const confirmationMessage =
      //       'You have unsaved changes. Are you sure you want to leave?';
      //     if (window.confirm(confirmationMessage)) {
      //       // User confirmed, allow navigation
      //     } else {
      //       // User canceled, prevent navigation
      //       window.history.pushState(null, '', window.location.href); // Stay on the current page
      //     }
      //   }
      // };

      const handleNavigation = (event) => {
        if (ActiveReducerData?.isEditMode) {
          const confirmationMessage =
            'You have unsaved changes. Are you sure you want to leave?';
          if (!window.confirm(confirmationMessage)) {
            event.preventDefault(); // Prevent navigation if the user cancels
          }
        }
      };
      window.addEventListener('beforeunload', handleBeforeUnload);
      window.addEventListener('popstate', handleNavigation);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('popstate', handleNavigation);
      };


    }, [ActiveReducerData]);
  return (
    <SideMenu />
  );
}
export default App;
