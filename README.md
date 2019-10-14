# learn-react-hooks
learn how to use react hooks for stateless components

## First, we should dive into the React Components
> The referenced article is [*Understanding React Components*](https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb) 

**The core of React is Components**

### Different ways to write components:
#### 1.Functional components
This is a functional component written using es6’s arrow/es5 function syntax().Takes no props and returns an html element.
Codes like this:
```javascript
    const Greeting = () => <h1>Hello World today!</h1>
```

Why do component names always start with a capital letter?
>When naming a React component, it is convention to capitalize the first letter. This is important because it enables React to differentiate between the native HTML tags such as div, h1, span etc and custom components

You may find functional components referred to as stateless, dumb or presentational in other literature. All theses names are derived from the simple nature that functional components take on.

The simple nature:
- **<font color="#DC143C">Funtional</font>** - they are basically functions
- **<font color="#DC143C">Stateless</font>** - they do not hold or manage state
- **<font color="#DC143C">Presentational</font>** - output UI elements

#### 2.Class components
Be written using ES6 classes instead of functions, codes like this:
```javascript
    Class Greeting extends React.Component{
        render(){
            return <h1>....</h1>
        }
    }
```

They have some additional features such as the ability to contain **<font color="#DC143C">logic</font>**(methods that handle onClick events etc.), **<font color="#DC143C">manege statements</font>** and **<font color="#DC143C">lifecycle</font>** and other capabilities.
- **<font color="#DC143C">Class</font>** - they are basically classes
- **<font color="#DC143C">Smart</font>** - they can contain logic
- **<font color="#DC143C">Stateful</font>** they can hold or manage local state
- **<font color="#DC143C">Container</font>** - hold/contain numerous other components

#### 3.How do I choose which component type to use?
Use a class component if you:
- **need to manage local state**
- **need to add lifecycle methods to your component**
- **need to add logic for event handlers**

Otherwise, **always use a functional component**. Class components that only have markup within the render body can safely be converted to functional components.
   
>Functional components can be referenced within*class components*and vice versa. However, it is not often that you will reference a class component within a functional component; class components typically serve as container components.

Components don’t become complex container, but rather channels for data flow. The best way to write a component is a function, not a class.

**总结**：React  组件主要有两种，一种是类组件，里面包含了很多逻辑（点击事件等等）和一些需要管理的状态以及组件的生命周期，这种组件一般比较复杂。另外一种是无状态组件，是一个pure function，返回一个pure ui element。一般情况下为了让代码性能以及更简介易重构更好我们尽量使用第二种无状态组件（一般称为functional component）

---

## React Hooks
**V16.8** introduces a new API called **React Hooks**, which reverses previous usage.

### Overview
Hooks are functions that let you "hook into" **<font color="#DC143C">react state</font>** and **<font color="#DC143C">lifecycle</font>** features from **function components**. React provides a few **built-in Hooks** like useState. You can also create your own Hooks(**custome Hookes**) to reuse stateful behavior between different components.

### Rules of hooks:
Hooks are js functions, but they impose two additional rules:
1. Only call hooks at the top level. Don’t call hooks inside loop, conditions, or nested functions.
2. Only call hooks from react function components. Don’t call hooks from regular js.

### When would I use a Hook?
if you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook(useEffect) inside the existing function component.

### Demo:
see codes in this project
ps:the dummy data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
use this api to get dummy data: https://jsonplaceholder.typicode.com/posts

1. **<font color="#DC143C">useState</font>**
   ```javascript
   const [..., set...] = useState([]/''/...)
   ```
2. **<font color="#DC143C">useEffect</font>**
   change the child class's lifecycle to the stateless function with useEffect
   ```javascript
        useEffect(()=>{
            fetchResponse(resourceName)
        },[resourceName])
   ```
   the first paramenter is a callback function so everything is inside in it, the second parameter is the value which we want to check if it be changed only when the passed variable changed.
   （示例代码中父组件传给子组件的值会随着点击不同的按钮改变，在使用react hook之前我们会在子组件内再写一个componentDidUpdate的生命周期用来刷新子组件中存放于state中的数据，代码：
   ```javascript
    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`)
        this.setState({ resources: response.data })
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.resourceName !== this.props.resourceName) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`)
            this.setState({ resources: response.data })
        }
    }
   ```
   当我们使用useState和useEffect时，完全可以把该组件改为无状态组件，当父组件传过的值变化时，只要在useEffect的第二个参数中注册该变量就会自动检测。具体代码见src目录下的ResourceList.js
   ）
3. **<font color="#DC143C">custome hooks</font>**
   具体代码见src目录下的ResourceList.js。注意custome hook要把state管理的数据返回



