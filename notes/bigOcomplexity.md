<b>big-O-notation</b> - can be used for time complexity comparison for algorithm

> **o(1)** - it is the ideal complexity. which means it does not depend on the size of data. same time will required to process, if dataset consist one or one million record.
> **e.g.** getting a value of an index in array is o(1) complexity operation. 

> **o(n)** - it is a linear complexity. which means if 10 record takes 1ms to processe 20 record will take 2ms.
> **e.g.** finding a record in an unsorted array is o(n) complexity operation

> **o(n2)** - it is a red alert complexity which genreally happens when nested loop is running on same data. if 10 record takes 5 second of processing 20 record will take 25 seconds
> **e.g.** poorly written sorting algorithm is o(n2) level complexity

> **o(nlogn)** - even though it is not common notation for pragmatic developers. none the less it's an important one. it is more efficient way to traverse data set that has a specific type like binary search tree. it is much more efficient than o(n). e.g. good sorting algorithm. for an example if 1000 point data takes 1000 second to traverse than if data structure implemented as binary tree. traversing will take 1000log10 which is 3 second.



