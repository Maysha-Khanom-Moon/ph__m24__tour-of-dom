## DOM
- document object model
    - it's like a tree
    - every joint point is node
        - node: object ---> an html element
        - there is parent nodes and child nodes


### what DOM Defines?
- The events for all HTML elements
- The methods to access all HTML elements
- The properties of all HTML elements
- All HTML elements as objects.


### What can do JavaScript with DOM?
- js can change all the html elements in the page
- js can change all the html attributes in the page
- js can change all the css styles in the page
- js can remove existing html elements and attributes
- js can add new html elements and attributes
- js can react to all existing html events in the page


## dom html-selectors
1. document.getElementsByTagName('tag')
2. document.getElementById('id')
3. document.getElementByClassName('class')
4. document.querySelectorAll('#id' / '.class')
4. document.querySelector('#id' / '.class') ---> single node(first one)


## NodeList vs HTMLCollection
- NodeList: from querySelectorAll
- HTMLCollection: getElements

1. 
    - htmlcollection: only contains element nodes
    - nodelist: contains element, attribute, text nodes
2. 
    - htmlcollection: accessed by name attribute, id attribute or index
    - nodelist: accessed by only index
3. 
    - htmlcollection: live or dynamic --> for/of
    - nodelist: static --> forEach



## style by dom
- case:
    - css: snake case
    - js: camel case

- #### only possible via single selector
    - document.getElementById('id').style.property='value'
    - document.querySelector('id').style.color='blue'
    - document.getElementByClassName[0].innerHTML = '<h1>WOW</h1>'
    - it works for existing style properties
    <br>
    - getAttribute('name')
    - setAttribute('name', 'value');
    <br>
    - innerText: only text part
    - innerHTML: total html part from inside the box