(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(99)),i={id:"example-setstate",title:"React & Immer"},d={unversionedId:"example-setstate",id:"example-setstate",isDocsHomePage:!1,title:"React & Immer",description:"<div",source:"@site/docs/example-setstate.mdx",slug:"/example-setstate",permalink:"/immer/example-setstate",editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/example-setstate.mdx",version:"current",sidebar:"Immer",previous:{title:"Curried producers",permalink:"/immer/curried-produce"},next:{title:"Update patterns",permalink:"/immer/update-patterns"}},s=[{value:"useState + Immer",id:"usestate--immer",children:[]},{value:"useImmer",id:"useimmer",children:[]},{value:"useReducer + Immer",id:"usereducer--immer",children:[]},{value:"useImmerReducer",id:"useimmerreducer",children:[]},{value:"Redux + Immer",id:"redux--immer",children:[]}],c={toc:s};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("center",null,Object(o.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"})),Object(o.b)("details",null,Object(o.b)("summary",{className:"egghead-summary"},"egghead.io lesson 8: Using Immer with _useState_. Or: _useImmer_"),Object(o.b)("br",null),Object(o.b)("div",null,Object(o.b)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/react-immutable-update-state-inside-react-components-with-useimmer/embed"})),Object(o.b)("a",{className:"egghead-link",href:"https://egghead.io/lessons/react-immutable-update-state-inside-react-components-with-useimmer"},"Hosted on egghead.io")),Object(o.b)("h2",{id:"usestate--immer"},"useState + Immer"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"useState")," hook assumes any state that is stored inside it is treated as immutable. Deep updates in the state of React components can be greatly simplified as by using Immer. The following example shows how to use ",Object(o.b)("inlineCode",{parentName:"p"},"produce")," in combination with ",Object(o.b)("inlineCode",{parentName:"p"},"useState"),", and can be tried on ",Object(o.b)("a",{parentName:"p",href:"https://codesandbox.io/s/immer-usestate-ujkgg?file=/src/index.js"},"CodeSandbox"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import React, { useCallback, useState } from "react";\nimport produce from "immer";\n\nconst TodoList = () => {\n  const [todos, setTodos] = useState([\n    {\n      id: "React",\n      title: "Learn React",\n      done: true\n    },\n    {\n      id: "Immer",\n      title: "Try Immer",\n      done: false\n    }\n  ]);\n\n  const handleToggle = useCallback((id) => {\n    setTodos(\n      produce((draft) => {\n        const todo = draft.find((todo) => todo.id === id);\n        todo.done = !todo.done;\n      })\n    );\n  }, []);\n\n  const handleAdd = useCallback(() => {\n    setTodos(\n      produce((draft) => {\n        draft.push({\n          id: "todo_" + Math.random(),\n          title: "A new todo",\n          done: false\n        });\n      })\n    );\n  }, []);\n\n  return (<div>{*/ See CodeSandbox */}</div>)\n}\n')),Object(o.b)("h2",{id:"useimmer"},"useImmer"),Object(o.b)("p",null,"Since all state updaters follow the same pattern where the update function is wrapped in ",Object(o.b)("inlineCode",{parentName:"p"},"produce"),", it is also possible to simplify the above by leveraging the ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/use-immer"},"use-immer")," package that will wrap updater functions in ",Object(o.b)("inlineCode",{parentName:"p"},"produce")," automatically:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import React, { useCallback } from "react";\nimport { useImmer } from "use-immer";\n\nconst TodoList = () => {\n  const [todos, setTodos] = useImmer([\n    {\n      id: "React",\n      title: "Learn React",\n      done: true\n    },\n    {\n      id: "Immer",\n      title: "Try Immer",\n      done: false\n    }\n  ]);\n\n  const handleToggle = useCallback((id) => {\n    setTodos((draft) => {\n      const todo = draft.find((todo) => todo.id === id);\n      todo.done = !todo.done;\n    });\n  }, []);\n\n  const handleAdd = useCallback(() => {\n    setTodos((draft) => {\n      draft.push({\n        id: "todo_" + Math.random(),\n        title: "A new todo",\n        done: false\n      });\n    });\n  }, []);\n\n  // etc\n')),Object(o.b)("p",null,"For the full demo see ",Object(o.b)("a",{parentName:"p",href:"https://codesandbox.io/s/use-immer-bvd5v?file=/src/index.js"},"CodeSandbox"),"."),Object(o.b)("h2",{id:"usereducer--immer"},"useReducer + Immer"),Object(o.b)("p",null,"Similarly to ",Object(o.b)("inlineCode",{parentName:"p"},"useState"),", ",Object(o.b)("inlineCode",{parentName:"p"},"useReducer")," combines neatly with Immer as well, as demonstrated in this ",Object(o.b)("a",{parentName:"p",href:"https://codesandbox.io/s/immer-usereducer-bqpzn?file=/src/index.js:0-1018"},"CodeSandbox"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import React, {useCallback, useReducer} from "react"\nimport produce from "immer"\n\nconst TodoList = () => {\n    const [todos, dispatch] = useReducer(\n        produce((draft, action) => {\n            switch (action.type) {\n                case "toggle":\n                    const todo = draft.find(todo => todo.id === action.id)\n                    todo.done = !todo.done\n                    break\n                case "add":\n                    draft.push({\n                        id: action.id,\n                        title: "A new todo",\n                        done: false\n                    })\n                    break\n                default:\n                    break\n            }\n        }),\n        [\n            /* initial todos */\n        ]\n    )\n\n    const handleToggle = useCallback(id => {\n        dispatch({\n            type: "toggle",\n            id\n        })\n    }, [])\n\n    const handleAdd = useCallback(() => {\n        dispatch({\n            type: "add",\n            id: "todo_" + Math.random()\n        })\n    }, [])\n\n    // etc\n}\n')),Object(o.b)("h2",{id:"useimmerreducer"},"useImmerReducer"),Object(o.b)("p",null,"...which again, can be slightly shorted by ",Object(o.b)("inlineCode",{parentName:"p"},"useImmerReducer")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"use-immer")," package (",Object(o.b)("a",{parentName:"p",href:"https://codesandbox.io/s/useimmerreducer-sycpb?file=/src/index.js"},"demo"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import React, { useCallback } from "react";\nimport { useImmerReducer } from "use-immer";\n\nconst TodoList = () => {\n  const [todos, dispatch] = useImmerReducer(\n    (draft, action) => {\n      switch (action.type) {\n        case "toggle":\n          const todo = draft.find((todo) => todo.id === action.id);\n          todo.done = !todo.done;\n          break;\n        case "add":\n          draft.push({\n            id: action.id,\n            title: "A new todo",\n            done: false\n          });\n          break;\n        default:\n          break;\n      }\n    },\n    [ /* initial todos */ ]\n  );\n\n  //etc\n\n')),Object(o.b)("h2",{id:"redux--immer"},"Redux + Immer"),Object(o.b)("p",null,"Redux + Immer is extensively covered in the documentation of ",Object(o.b)("a",{parentName:"p",href:"https://redux-toolkit.js.org/usage/immer-reducers"},"Redux Toolkit"),". For Redux without Redux Toolkit, the same trick as applied to ",Object(o.b)("inlineCode",{parentName:"p"},"useReducer")," above can be applied: wrap the reducer function with ",Object(o.b)("inlineCode",{parentName:"p"},"produce"),", and you can safely mutate the draft!"),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\n\n// Reducer with initial state\nconst INITIAL_STATE = [\n    /* bunch of todos */\n]\n\nconst todosReducer = produce((draft, action) => {\n    switch (action.type) {\n        case "toggle":\n            const todo = draft.find(todo => todo.id === action.id)\n            todo.done = !todo.done\n            break\n        case "add":\n            draft.push({\n                id: action.id,\n                title: "A new todo",\n                done: false\n            })\n            break\n        default:\n            break\n    }\n})\n')))}m.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=m(n),p=a,b=l["".concat(i,".").concat(p)]||l[p]||u[p]||o;return n?r.a.createElement(b,d(d({ref:t},c),{},{components:n})):r.a.createElement(b,d({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);