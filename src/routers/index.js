import Home from '../pages/Home';
import About from '../pages/About';
import Effect from '../pages/Study/Hooks/Effect';
import NotFind from '../pages/NotFind';
import Memo from '../pages/Study/Hooks/Memo';
import Callback from '../pages/Study/Hooks/Callback';
import Ref from '../pages/Study/Hooks/Ref'
import Context from '../pages/Study/Hooks/Context';
import Reducer from '../pages/Study/Hooks/Reducer';
import Transition from '../pages/Study/Hooks/Transition';
import Id from '../pages/Study/Hooks/Id';
import DeferredValue from '../pages/Study/Hooks/DeferredValue';
import DebugValue from '../pages/Study/Hooks/DebugValue';
import ImperativeHandle from '../pages/Study/Hooks/ImperativeHandle';
const routers=[
    {
        title:'首页',
        name:'Home',
        path: '/',
        component: Home,
    },
    {
        title:'关于',
        name:'About',
        path: '/about',
        component: About
    },
    {
       title:'useEffect使用',
       name:'Hooks-Effect',
       path:'/hooks/effect',
       component:Effect
    },
    {
        title:'useMemo使用',
        name:'Hooks-Memo',
        path:'/hooks/memo',
        component:Memo
     },
     {
        title:'useCallback使用',
        name:'Hooks-Callback',
        path:'/hooks/callback',
        component:Callback
     },
     {
        title:'useRef使用',
        name:'Hooks-Ref',
        path:'/hooks/ref',
        component:Ref
     },
     {
        title:'useContext使用',
        name:'Hooks-Context',
        path:'/hooks/context',
        component:Context
     },
     {
        title:'useReducer使用',
        name:'Hooks-Reducer',
        path:'/hooks/reducer',
        component:Reducer
     },
     {
      title:'useTransition使用',
      name:'Hooks-Transition',
      path:'/hooks/transition',
      component:Transition
     },
     {
      title:'useId使用',
      name:'Hooks-Id',
      path:'/hooks/id',
      component:Id
     },
     {
      title:'useDeferredValue使用',
      name:'Hooks-DeferredValue',
      path:'/hooks/deferredValue',
      component:DeferredValue
     },
     {
      title:'useDebugValue使用',
      name:'Hooks-DebugValue',
      path:'/hooks/debugValue',
      component:DebugValue
     },
     {
      title:'useImperativeHandle使用',
      name:'Hooks-ImperativeHandle',
      path:'/hooks/imperativeHandle',
      component:ImperativeHandle
     },
    {
        title:'404',
        path:'*',
        component:NotFind
    }
]
export default routers