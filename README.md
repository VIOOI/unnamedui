# An unnamed UI library for ReactJS based on TailwindCSS

## Flow Control Components

### Deferred

This component is responsible for deferred display of child elements. While the specified timeout is pending, a placeholder is displayed. This is useful for controlling the loading time of content.

```tsx
<Deferred timeout={1000} placeholder={<div>Загрузка...</div>}>
	<MyComponent />
</Deferred>
```

### Dynamic

Dynamic is a component for displaying dynamic React components. It accepts a component (component) and its properties (props), which makes it easy to integrate different types of components, including HTML tags.

```tsx
type MyComponentProps = {
	message: string;
};

const MyComponent: FC<MyComponentProps> = ({ message }) =>
  <div>{message}</div>;

<Dynamic component={MyComponent} props={{ message: "Привет, мир!" }} />
<Dynamic component="div" props={{ children: "Это div элемент" }} />
```

### For

For is designed for rendering lists. It allows you to render array items efficiently, providing support for empty lists via empty and keys for items via keys.

```jsx
<For items={[1, 2, 3]}>{item => <div>{item}</div>}</For>

<For items={[]} empty={<div>Список пуст</div>}>
  {item => <div>{item}</div>}
</For>

<For
  items={[
    { id: "a", value: "Первый" },
    { id: "b", value: "Второй" },
  ]}
  keys={item => item.id}
>
  {item => <div>{item.value}</div>}
</For>
```

### Repeat

Repeat is used to repeat child elements a specified number of times. This is useful for creating repetitive structures in the interface, such as layouts or lists.

```jsx
<Repeat count={5}>
  {(index) => <p>Элемент {index}</p>}
</Repeat>

<Repeat count={0} empty={<p>Нет элементов</p>}/>
```

### Show

Show is a component for conditional rendering. It displays children if the when condition is true, otherwise it shows fallback. This is useful for controlling the visibility of UI elements.

```jsx
<Show
  when={someCondition}
  fallback={<div>Загрузка...</div>}
>
  <div>Содержимое после загрузки</div>
</Show>

<Show when={someCondition}>
  <div>
    Покажется только если when == true, в противном случае ничего не будет
  </div>
</Show>
```

### If

The If component is used for conditional rendering. It displays the content in If.True if the condition is true, and the content in If.False if the condition is false. This makes it easy to create conditional interfaces without using ternary operators or boolean expressions.

```jsx
<If condition={someCondition}>
	<If.True>On True</If.True>
	<If.False>On False</If.False>
</If>
```

### MediaShow

MediaShow displays its children only when the media query condition is met. This allows you to create adaptive interfaces that respond to changes in the size of the viewing window.

```jsx
<MediaShow query="(min-width: 768px)">
	<div>Show only on desktop</div>
</MediaShow>
```

### Switch / Match

These components work similarly to the switch operator in JavaScript. Switch selects and displays the first Match component whose when condition is true. Match displays its children when the when condition is true.

```jsx
<Switch fallback={<DefaultComponent />}>
	<Match when={condition1}>
		<Component1 />
	</Match>
	<Match when={condition2}>
		<Component2 />
	</Match>
	...
</Switch>
```

## Layout Components

### Aspect Ratio

aspectRatio provides support for a fixed aspect ratio for nested components. This is useful for media content such as images or videos where it is important to keep the proportions.

```jsx
<AspectRatio ratio={16 / 9}>{/* Your content */}</AspectRatio>
```

### Box

Box is a generic building block similar to div. It supports basic CSS properties via props and additional styles via TailwindCSS classes.

```jsx
<Box className="bg-blue-100 p-5 rounded-lg">
  <Text>Hello</Text>
</Box>

<Box className="bg-blue-100 p-5 rounded-lg">
  <Text slot-parent>Hello</Text>
</Box>
```

### Container

Container is a wrapper for content with a maximum width. This makes it easy to center and limit the width of the content on the page.

```jsx
<Container className="max-w-lg">{/* Your content */}</Container>
```

### Section

Section is used to group related content. This is useful for structuring a page into logical sections.

```jsx
<Section>{/* Your content */}</Section>
```

### Stack

Stack automatically places child elements in a stack (vertically or horizontally), which is convenient for organizing interface elements.

```jsx
<Stack>
	<Box>Element 1</Box>
	<Box>Element 2</Box>
	<Box>Element 3</Box>
</Stack>
```

### Flex

Flex является расширением Box с специфическими настройками для flex-контейнера. Он позволяет легко управлять расположением и выравниванием дочерних элементов.

```jsx
<Flex justify="center" align="center" className="bg-blue-100 p-5 rounded-lg">
	<Box className="p-5 bg-blue-100" />
</Flex>
```

## Typography

### Text

Text is a basic text component that supports basic typographic properties via props. It can be used as the basis for other text components.

```jsx
<Text as="strong"> Hello UI </Text>

<Text className="text-blue-500 p-5">
  <h1 slot-parent>Hello</h1>
</Text>
```

### Heading

Heading is an add-on to Text designed for headings. It supports all Text functions and additionally allows you to easily create different levels of headings.

```jsx
<Heading as="h1"> Hello UI </Text>
```

### Em

Em highlights text in italics, which is useful for accentuation or expression of intonation.

```jsx
<Em>Create boldly, experiment, explore new horizons!</Em>
```

### Code

Code предназначен для отображения инлайн-кода. Он обеспечивает подходящую стилизацию для кода внутри текстовых блоков.

```jsx
<Code>console.log()</Code>
```
