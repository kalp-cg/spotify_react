Below are concise solutions for each of the React, React Router, and Redux Toolkit problems
you provided. Each solution focuses on the core functionality to demonstrate the tested
concepts. All code assumes you’re using React 18+ and functional components with hooks. For
brevity, I’ll provide the main component or logic, omitting repetitive imports or boilerplate (e.g.,
CSS, full app setup) unless critical. If you need a specific part expanded, let me know!
---
### 1. **Counter Component**
```jsx
import { useState } from 'react';
function Counter() {
const [count, setCount] = useState(0);
return (
<div>
<p>Count: {count}</p>
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button>
<button onClick={() => setCount(0)}>Reset</button>
</div>
);
}
```
**Concepts:** `useState` for state management, event handling with `onClick`.
---
### 2. **Todo List**
```jsx
import { useState } from 'react';
function TodoList() {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');
const addTodo = () => {
if (input.trim()) {
setTodos([...todos, input]);
setInput('');}
};
const deleteTodo = (index) => {
setTodos(todos.filter((_, i) => i !== index));
};
return (
<div>
<input
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Add a todo"
/>
<button onClick={addTodo}>Add</button>
<ul>
{todos.map((todo, index) => (
<li key={index}>
{todo}
<button onClick={() => deleteTodo(index)}>Delete</button>
</li>
))}
</ul>
</div>
);
}
```
**Concepts:** `useState` for todos and input, list rendering with `.map`, event handling.
---
### 3. **Toggle Show/Hide**
```jsx
import { useState } from 'react';
function ToggleText() {
const [isVisible, setIsVisible] = useState(false);
return (
<div>
<button onClick={() => setIsVisible(!isVisible)}>
{isVisible ? 'Hide' : 'Show'}</button>
{isVisible && <p>Hello World</p>}
</div>
);
}
```
**Concepts:** `useState` for toggle state, conditional rendering with `&&`.
---
### 4. **Character Count in Textarea**
```jsx
import { useState } from 'react';
function CharacterCounter() {
const [text, setText] = useState('');
return (
<div>
<textarea
value={text}
onChange={(e) => setText(e.target.value)}
placeholder="Type here..."
/>
<p>Character Count: {text.length}</p>
</div>
);
}
```
**Concepts:** `useState` for text input, form handling with `onChange`.
---
### 5. **Live Search Filter**
```jsx
import { useState } from 'react';
function SearchFilter() {
const [search, setSearch] = useState('');
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];const filteredNames = names.filter((name) =>
name.toLowerCase().includes(search.toLowerCase())
);
return (
<div>
<input
value={search}
onChange={(e) => setSearch(e.target.value)}
placeholder="Search names..."
/>
<ul>
{filteredNames.map((name, index) => (
<li key={index}>{name}</li>
))}
</ul>
</div>
);
}
```
**Concepts:** `useState` for search input, array filtering, input handling.
---
### 6. **API Fetch and Display**
```jsx
import { useState, useEffect } from 'react';
function UserList() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((data) => {
setUsers(data);
setLoading(false);
})
.catch((err) => {setError('Failed to fetch users');
setLoading(false);
});
}, []);
if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;
return (
<ul>
{users.map((user) => (
<li key={user.id}>{user.name}</li>
))}
</ul>
);
}
```
**Concepts:** `useEffect` for API calls, `fetch`, conditional rendering for loading/error.
---
### 7. **Form Validation**
```jsx
import { useState } from 'react';
function LoginForm() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
if (!email || !password) {
setError('Email and password are required');
return;
}
setError('');
console.log('Form submitted:', { email, password });
};
return (
<form onSubmit={handleSubmit}><div>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Email"
/>
</div>
<div>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
placeholder="Password"
/>
</div>
{error && <p>{error}</p>}
<button type="submit">Login</button>
</form>
);
}
```
**Concepts:** Controlled components with `useState`, form validation, event handling.
---
### 8. **Accordion Component**
```jsx
import { useState } from 'react';
function Accordion() {
const [activeIndex, setActiveIndex] = useState(null);
const items = [
{ question: 'Q1?', answer: 'Answer 1' },
{ question: 'Q2?', answer: 'Answer 2' },
];
const toggleAccordion = (index) => {
setActiveIndex(activeIndex === index ? null : index);
};
return (<div>
{items.map((item, index) => (
<div key={index}>
<button onClick={() => toggleAccordion(index)}>
{item.question}
</button>
{activeIndex === index && <p>{item.answer}</p>}
</div>
))}
</div>
);
}
```
**Concepts:** `useState` for active item, conditional rendering, dynamic data.
---
### 9. **Theme Toggle (Dark/Light Mode)**
```jsx
import { useState } from 'react';
function ThemeToggle() {
const [isDark, setIsDark] = useState(false);
return (
<div style={{ background: isDark ? '#333' : '#fff', color: isDark ? '#fff' : '#000' }}>
<button onClick={() => setIsDark(!isDark)}>
Toggle {isDark ? 'Light' : 'Dark'} Mode
</button>
<p>Sample content</p>
</div>
);
}
```
**Concepts:** `useState` for theme, conditional styling.
---
### 10. **Timer (Start/Stop)**
```jsximport { useState, useEffect } from 'react';
function Timer() {
const [seconds, setSeconds] = useState(0);
const [isRunning, setIsRunning] = useState(false);
useEffect(() => {
let interval;
if (isRunning) {
interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
}
return () => clearInterval(interval);
}, [isRunning]);
return (
<div>
<p>Time: {seconds}s</p>
<button onClick={() => setIsRunning(true)}>Start</button>
<button onClick={() => setIsRunning(false)}>Stop</button>
</div>
);
}
```
**Concepts:** `useState` for timer state, `useEffect` with `setInterval`/`clearInterval`.
---
### 11. **Basic Routing with Two Pages**
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
return (
<BrowserRouter>
<nav>
<Link to="/">Home</Link> | <Link to="/about">About</Link>
</nav>
<Routes>
<Route path="/" element={<h1>Welcome to Home</h1>} />
<Route path="/about" element={<h1>About Us</h1>} />
</Routes>
</BrowserRouter>);
}
```
**Concepts:** `BrowserRouter`, `Routes`, `Route`, `Link` for navigation.
---
### 12. **Dynamic Routing (Product Detail)**
```jsx
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
function ProductDetail() {
const { id } = useParams();
return <h1>Product ID: {id}</h1>;
}
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/product/:id" element={<ProductDetail />} />
</Routes>
</BrowserRouter>
);
}
```
**Concepts:** Dynamic routing with `useParams`.
---
### 13. **Redirect Unauthorized Access**
```jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
function PrivateRoute({ children }) {
const [isLoggedIn] = useState(false); // Fake auth state
return isLoggedIn ? children : <Navigate to="/login" />;
}function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/login" element={<h1>Login Page</h1>} />
<Route
path="/dashboard"
element={
<PrivateRoute>
<h1>Dashboard</h1>
</PrivateRoute>
}
/>
</Routes>
</BrowserRouter>
);
}
```
**Concepts:** Conditional routing with `Navigate`, protected routes.
---
### 14. **Counter with Redux Toolkit**
```jsx
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
name: 'counter',
initialState: { value: 0 },
reducers: {
increment: (state) => { state.value += 1; },
decrement: (state) => { state.value -= 1; },
reset: (state) => { state.value = 0; },
},
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
// store.js
import { configureStore } from '@reduxjs/toolkit';import counterReducer from './counterSlice';
export const store = configureStore({
reducer: { counter: counterReducer },
});
// App.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';
function Counter() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
return (
<div>
<p>Count: {count}</p>
<button onClick={() => dispatch(increment())}>Increment</button>
<button onClick={() => dispatch(decrement())}>Decrement</button>
<button onClick={() => dispatch(reset())}>Reset</button>
</div>
);
}
// Wrap App with Provider in index.js
import { Provider } from 'react-redux';
import { store } from './store';
function Root() {
return (
<Provider store={store}>
<Counter />
</Provider>
);
}
```
**Concepts:** `createSlice`, `configureStore`, `useSelector`, `useDispatch`.
---
### 15. **Todo List with Redux Toolkit**
```jsx// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';
const todoSlice = createSlice({
name: 'todos',
initialState: [],
reducers: {
addTodo: (state, action) => { state.push(action.payload); },
deleteTodo: (state, action) => {
return state.filter((_, index) => index !== action.payload);
},
},
});
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
export const store = configureStore({
reducer: { todos: todoReducer },
});
// App.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './todoSlice';
function TodoList() {
const [input, setInput] = useState('');
const todos = useSelector((state) => state.todos);
const dispatch = useDispatch();
const handleAdd = () => {
if (input.trim()) {
dispatch(addTodo(input));
setInput('');
}
};
return (
<div><input
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Add todo"
/>
<button onClick={handleAdd}>Add</button>
<ul>
{todos.map((todo, index) => (
<li key={index}>
{todo}
<button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
</li>
))}
</ul>
</div>
);
}
```
**Concepts:** Array management in Redux, dispatching actions, global state.
---
### 16. **Async Fetch using createAsyncThunk**
```jsx
// postSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
return res.json();
});
const postSlice = createSlice({
name: 'posts',
initialState: { data: [], loading: false, error: null },
extraReducers: (builder) => {
builder
.addCase(fetchPosts.pending, (state) => {
state.loading = true;
})
.addCase(fetchPosts.fulfilled, (state, action) => {
state.loading = false;state.data = action.payload;
})
.addCase(fetchPosts.rejected, (state, action) => {
state.loading = false;
state.error = action.error.message;
});
},
});
export default postSlice.reducer;
// store.js
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
export const store = configureStore({
reducer: { posts: postReducer },
});
// App.jsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postSlice';
function PostList() {
const { data, loading, error } = useSelector((state) => state.posts);
const dispatch = useDispatch();
useEffect(() => {
dispatch(fetchPosts());
}, [dispatch]);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
return (
<ul>
{data.map((post) => (
<li key={post.id}>{post.title}</li>
))}
</ul>
);
}
```**Concepts:** `createAsyncThunk`, `extraReducers`, async state management.
---
### 17. **Theme Toggle with Redux Toolkit**
```jsx
// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';
const themeSlice = createSlice({
name: 'theme',
initialState: { isDark: false },
reducers: {
toggleTheme: (state) => {
state.isDark = !state.isDark;
},
},
});
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
export const store = configureStore({
reducer: { theme: themeReducer },
});
// App.jsx
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';
function ThemeToggle() {
const isDark = useSelector((state) => state.theme.isDark);
const dispatch = useDispatch();
return (
<div style={{ background: isDark ? '#333' : '#fff', color: isDark ? '#fff' : '#000' }}>
<button onClick={() => dispatch(toggleTheme())}>
Toggle {isDark ? 'Light' : 'Dark'} Mode</button>
<p>Sample content</p>
</div>
);
}
```
**Concepts:** Boolean state in Redux, conditional styling, dispatching actions.
---
These solutions are minimal yet functional, covering the core requirements and concepts tested.
For any specific question, I can provide additional details, styling, or edge cases if needed. Let
me know how you’d like to proceed!
