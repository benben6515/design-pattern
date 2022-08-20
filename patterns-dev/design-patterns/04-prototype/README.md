# Prototype Pattern (原形鏈模式 )

> 1 of 23 GoF design patterns

可以在同類型的 Objects 中分享共同的 properties
在原生的 JavaScript 中就內建原形鏈了

好處：

1. 可以 clone objects 而不會藕合到原來的 classes
2. 可以減少重複的初始化，而使用已建立好的 prototypes
3. 可以更便利的減少複雜的 objects
4. 是一個繼承的替代方案，用來處理複雜的 objects

壞處：

1. 使用複雜的 object prototype 如有循環的參照，可能會非常棘手
