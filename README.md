# An unnamed UI library for ReactJS based on TailwindCSS

## Flow

### Deferred

Компонент `Deferred` отображает дочерние элементы после заданной задержки.
Пока идет задержка, может отображаться заглушка.

```tsx
<Deferred timeout={1000} placeholder={<div>Загрузка...</div>}>
	<MyComponent />
</Deferred>
```

### Dynamic

Отображает динамический компонент React.

```tsx
// Пример с функциональным компонентом
const MyComponent: React.FC<{ message: string }> = ({ message }) => <div>{message}</div>;
<Dynamic component={MyComponent} props={{ message: "Привет, мир!" }} />

// Пример с тегом HTML
<Dynamic component="div" props={{ children: "Это div элемент" }} />
```

### For

Компонент For для рендеринга списков в React.

```jsx
 // Пример использования с массивом чисел
 <For items={[1, 2, 3]} >
  {(item) => <div>{item}</div>}
 </For>

 // Пример с пустым списком и компонентом empty
 <For items={[]} empty={<div>Список пуст</div>} >
   {(item) => <div>{item}</div>}
 </For>

 // Пример использования с ключами
 <For
   items={[{ id: 'a', value: 'Первый' }, { id: 'b', value: 'Второй' }]}
   keys={(item) => item.id}
 >{(item) =>
   <div>{item.value}</div>
 }</For>
```

### Repeat

Компонент Repeat для повторения дочерних элементов.

```jsx
<Repeat count={5}>
  {(index) => <p>Элемент {index}</p>}
</Repeat>

<Repeat count={0} empty={<p>Нет элементов</p>}/>
```

### Show

Компонент `Show` для условного рендеринга в React.
Отображает `children`, если условие `when` истинно, иначе отображает `fallback`.

```jsx
<Show when={someCondition} fallback={<div>Загрузка...</div>}>
  <div>Содержимое после загрузки</div>
</Show>
<Show when={someCondition}>
  <div>Покажется только если when == true, в противном случае ничего не будет</div>
</Show>
```

### Switch / Match

Компонент `Switch` работает аналогично оператору switch в JavaScript.
Он принимает произвольное количество дочерних компонентов `Match` и возвращает первый `Match`, чье свойство `when` равно `true`.
Если такого `Match` нет, возвращается компонент, указанный в свойстве `fallback`.

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

Компонент `Match` используется в сочетании с `Switch`.
Он отображает своих детей (`children`), если свойство `when` истинно (true).

```jsx
<Match when={someCondition}>
	<SomeComponent />
</Match>
```

## Layout

### Box

Основной строительный блок, аналог div испольуется в основе других блочных компонентах

Если сновные настройки которые можно изменить в props: position, display, shrink, grow,
остальные изменяйте при помощи классов TailwindCSS

Можно указать каким она будет блоком при помощи as="div"

```jsx 
<Box className="bg-blue-100 p-5 rounded-lg">
    <Text>Hello</Text>
</Box>

// У дочернего элемента можно определить параметр asParent и будет работать как asChild у компонента в Radix-ui 

<Box className="bg-blue-100 p-5 rounded-lg">
    <Text asParent>Hello</Text>
</Box>
```

### Flex 

Блок надстройка над Box со специфическими настройками flex 

```jsx 
<Flex 
    justify="center"
    align="center"
    className="bg-blue-100 p-5 rounded-lg"
>
    <Box className="p-5 bg-blue-100" />
</Flex>

```

## Typography

### Text 

Основной текст лежит в основе других текстовых компонентов
Если сновные настройки которые можно изменить в props: family, style, weight, transform, decoration, align
остальные изменяйте при помощи классов TailwindCSS

Можно указать каким она будет тегом текста при помощи as="p"

```jsx 
<Text as="strong" align="center"> Hello UI </Text>

// У дочернего элемента можно определить параметр asParent и будет работать как asChild у компонента в Radix-ui 
<Text className="text-blue-500 p-5">
    <h1>Hello</h1>
</Text>
```

### Heading 

Надстройка над Text

```jsx 
<Heading as="h1" align="center"> Hello UI </Text>
```
