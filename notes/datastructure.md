<h4>datastructures</h4> implementing the right data structure is essential for handling large amount of data

>**array** - array is a fundamental data structure. it uses index for storing data which makes it very fast to direct access data. array does store data in continues form and has minimal overhead.but if a primary operation of an application is adding and removing data or find operation, array might not be the best choice. as it has to update whole indexing over and over again. there are several types array - fixed, variable length, 2-3 dimensional, jagged.      

>**linked-list** - linked list store data and the address of next data point. which gives it flexibility to not having to store data in the continues form. as a result it is much faster to add and remove data in linked-list and on the flip side it is not a great data structre to access data frequently. there are two type of linked-list single, doubly linked-list.

>**stack** - stack are more specialized array. which operate on first in first out principle. ofcourse it can only be used in very specialized case. but in those cases it can be very fast to add and remove data as well as accessing the data

>**queue** - just like stack queue is an specialized array which can operate on last in first out principle and can be incredibly fast in specific scenario e.g. implementing a parser. 

>**hash-map** - hash-map (or just plain object is js) has best of both world. it is fast to add/remove an element and at the same time it is also fast to access data. on the downside it store more overhead. and there is no order when access data.

>**tree/heap** - tree and heap data structures are node based data structure (parent, child, leaf) specially designed for faster traversal of data. unlike throwing new data object in the first or last position. in these data structure data points are arranged with more of structure in the mind. thus require more works to insert a new data point. but as a result it makes searching and finding data really fast.

>**graph** - unlike tree, graph data structure doesn't have one parent. it is more of who relates to whom kind of data structure. any node in the data structure can connect with any other data structure.
these are very specialized data structure.  

>**set** - set is a logical compound of random objects. and are only good for checking if an object belong to a set. I can not think of any pragmatic use of this data structure so far. 



