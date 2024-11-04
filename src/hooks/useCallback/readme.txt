 import { useMemo, useCallback } from 'react';

 function ProductPage({ productId, referrer }) {
   const product = useData('/product/' + productId);

   const requirements = useMemo(() => {  //Calls your function and caches its result
     return computeRequirements(product);
   }, [product]);

   const handleSubmit = useCallback((orderDetails) => {  //Caches your function itself
     post('/product/' + productId + '/buy', {
       referrer,
       orderDetails,
     });
   }, [productId, referrer]);

   return (
     <div className={theme}>
       <ShippingForm requirements={requirements} onSubmit={handleSubmit} />
     </div>
   );
 }

/*
    useCallback: cached function mỗi lần re-render
    syntax: const cachedFn = useCallback(myFunction, [dependencies]) 

    usage:
        - Sometime cần cached function khi pass to childComponent. Để cached function wrap function trong useCallback


        Note: Thông thường bạn sẽ thấy useMemo vs useCallback thường đi với nhau. Cả 2 sẽ hữu ích khi ta optimization childComponent

        - useMemo: cached result of calling function(call function rồi cached lại kết quả)
        - useCallback: cached function itself. Không như useMemo nó sẽ không gọi function được cung cấp thay vì đó nó sẽ cached lại function được cung cấp.
        vì vậy handleSubmit sẽ không thay đổi khi deps changed or reference changed
        - useCallback sẽ hữu dụng trong 1 số th sau:
            + pass prop to component wrapped by memo
            + function làm prop là deps của 1 hook. vd: 1 hàm được wrapped bở useCallback được deps chính nó or phụ thuộc vào 1 hàm ở trong useEffect
*/