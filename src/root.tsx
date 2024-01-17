import { ToastProvider } from "./context/toast-provider";
import { Example } from "./example/example";
// import { NewToastDesign } from "./example/NewToastDesign";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Toast Qwik</title>
      </head>
      <body style={{
        // background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
      }}>
        {/* <ToastProvider config={{
          position: Position.BOTTOM_LEFT,
          duration: 150000,
          items: []
        }}>
          <Example />
        </ToastProvider> */}
        {/* <NewToastDesign /> */}
        
        <ToastProvider config={{
          position: "TR"
        }}>
          <Example />
        </ToastProvider>
      </body>
    </>
  );
};
