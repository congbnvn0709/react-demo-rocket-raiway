import React, { memo, useEffect } from "react";

export default memo(function Index({ name, email, user }) {
  useEffect(() => {
    console.log("renderProfile");
    console.log(user);
  });
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}, comparisionName);

// Custom comparision function

function comparisionName(oldValue, newValue) {
  return oldValue.user.name === newValue.user.name;
}

/*  
    syntax: memo(myComponent, arePropsEquals)
    memo: Là higer order function
    usage: -   skip re-render when prop not changed
           -   component được wrap lại bằng memo vẫn sẽ re-render when state của chính component được wrap lại changed
           -   component được wrap lại bằng memo vẫn sẽ re-render when context changed
           -   sử dụng useMemo khi ta muốn truyền object qua prop để tránh việc re-render

    Note: 
    -   Component re-render when prop is object , array or function(because reference has changed)
    -   When you need pt pass a function to menmoize component (component được wrap lại bằng memo). thì ta có thể khai báo hàm đó bên ngoài component để cho function never changed 
    or sử dụng useCallback để cached data giữa các lần re-render
    => avoid re-render when prop is object, array or function we need menmoize prop in parent component using useMemo
        - memo chỉ hoạt động với prop được truyền từ parent
*/
