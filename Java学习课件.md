# Java 学习课件

> 适合有 C/C++ 基础的同学自学使用

---

## 目录

1. [Java 简介与环境搭建](#1-java-简介与环境搭建)
2. [Java 基础语法](#2-java-基础语法)
3. [面向对象编程](#3-面向对象编程)
4. [常用类与API](#4-常用类与api)
5. [异常处理](#5-异常处理)
6. [集合框架](#6-集合框架)
7. [文件操作与IO](#7-文件操作与io)
8. [多线程基础](#8-多线程基础)
9. [学习建议与资源](#9-学习建议与资源)

---

## 1. Java 简介与环境搭建

### 1.1 Java 是什么？

Java 是一种**面向对象**的编程语言，由 Sun Microsystems（现 Oracle）开发。它的核心理念是 **"Write Once, Run Anywhere"（一次编写，到处运行）**。

**与 C/C++ 的主要区别：**
- **自动内存管理**：有垃圾回收（GC），不需要手动 `free` 或 `delete`
- **没有指针**：Java 用引用代替指针，更安全
- **跨平台**：Java 代码编译成字节码（.class），在 JVM 上运行
- **纯面向对象**：一切皆对象（除基本类型）

### 1.2 环境搭建

**安装 JDK（Java Development Kit）：**
1. 下载：[Oracle JDK](https://www.oracle.com/java/technologies/downloads/) 或 [OpenJDK](https://openjdk.org/)
2. 安装后配置环境变量 `JAVA_HOME` 和 `PATH`
3. 验证安装：
```bash
java -version
javac -version
```

**编写第一个程序：**
```java
// HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

**编译与运行：**
```bash
javac HelloWorld.java  # 编译，生成 HelloWorld.class
java HelloWorld        # 运行
```

---

## 2. Java 基础语法

### 2.1 数据类型

**基本数据类型（8种）：**
```java
byte    b = 127;        // 1字节，-128 ~ 127
short   s = 32767;      // 2字节
int     i = 2147483647; // 4字节（默认整数类型）
long    l = 9223372036854775807L; // 8字节，注意后缀 L

float   f = 3.14f;      // 4字节，注意后缀 f
double  d = 3.14159;    // 8字节（默认浮点类型）

char    c = 'A';        // 2字节，Unicode字符
boolean flag = true;    // true 或 false
```

**引用类型：**
- 类（Class）
- 接口（Interface）
- 数组（Array）
- 字符串（String）

**与 C/C++ 的区别：**
- Java 的 `boolean` 不能与整数互转（C/C++ 中 0 为假，非 0 为真）
- Java 的 `char` 是 2 字节（Unicode），C/C++ 是 1 字节（ASCII）
- Java 没有 `unsigned` 类型

### 2.2 变量与常量

```java
// 变量声明
int age = 18;
String name = "张三";

// 常量（用 final 关键字）
final double PI = 3.14159;
final int MAX_SIZE = 100;
```

### 2.3 运算符

与 C/C++ 基本相同：
```java
// 算术运算符
int a = 10, b = 3;
int sum = a + b;       // 13
int diff = a - b;      // 7
int product = a * b;   // 30
int quotient = a / b;  // 3（整数除法）
int remainder = a % b; // 1

// 关系运算符
boolean result = (a > b);  // true
boolean equal = (a == b);  // false

// 逻辑运算符
boolean and = (a > 5) && (b < 5); // true
boolean or = (a < 5) || (b < 5);  // true
boolean not = !(a > 5);           // false

// 赋值运算符
a += 5;  // a = a + 5
a++;     // a = a + 1
```

**特殊：字符串连接**
```java
String s = "Hello" + " " + "World"; // "Hello World"
String msg = "Age: " + 18;          // "Age: 18"（自动转换）
```

### 2.4 控制流

**条件语句：**
```java
// if-else
int score = 85;
if (score >= 90) {
    System.out.println("优秀");
} else if (score >= 60) {
    System.out.println("及格");
} else {
    System.out.println("不及格");
}

// switch（Java 7+ 支持 String）
String grade = "A";
switch (grade) {
    case "A":
        System.out.println("优秀");
        break;
    case "B":
        System.out.println("良好");
        break;
    default:
        System.out.println("其他");
}
```

**循环语句：**
```java
// for 循环
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// 增强 for 循环（foreach）
int[] arr = {1, 2, 3, 4, 5};
for (int num : arr) {
    System.out.println(num);
}

// while 循环
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// do-while 循环
int j = 0;
do {
    System.out.println(j);
    j++;
} while (j < 5);
```

### 2.5 数组

```java
// 声明与初始化
int[] arr1 = new int[5];           // 默认值为 0
int[] arr2 = {1, 2, 3, 4, 5};      // 直接初始化
String[] names = new String[3];    // 引用类型默认值为 null

// 访问与修改
arr1[0] = 10;
System.out.println(arr2[2]); // 3

// 获取长度
System.out.println(arr2.length); // 5

// 多维数组
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
System.out.println(matrix[1][2]); // 6
```

**与 C/C++ 的区别：**
- Java 数组有 `.length` 属性（C/C++ 需要手动记录长度）
- Java 数组越界会抛出异常（C/C++ 可能导致未定义行为）
- Java 数组是对象，存储在堆上

---

## 3. 面向对象编程

### 3.1 类与对象

**定义类：**
```java
public class Student {
    // 成员变量（属性）
    private String name;
    private int age;
    
    // 构造方法
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // 方法
    public void introduce() {
        System.out.println("我叫" + name + "，今年" + age + "岁");
    }
    
    // Getter 和 Setter
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}
```

**创建对象：**
```java
Student s1 = new Student("张三", 18);
s1.introduce(); // 我叫张三，今年18岁

Student s2 = new Student("李四", 20);
System.out.println(s2.getName()); // 李四
```

**与 C++ 的区别：**
- Java 没有析构函数（由垃圾回收器自动管理）
- Java 对象必须用 `new` 创建（不能在栈上创建）
- Java 的 `this` 类似 C++ 的 `this`，但不是指针

### 3.2 封装

封装是将数据和方法包装在类中，通过访问修饰符控制访问权限。

**访问修饰符：**
| 修饰符 | 同一类 | 同一包 | 子类 | 其他包 |
|--------|--------|--------|------|--------|
| `public` | ✓ | ✓ | ✓ | ✓ |
| `protected` | ✓ | ✓ | ✓ | ✗ |
| 默认（无修饰符） | ✓ | ✓ | ✗ | ✗ |
| `private` | ✓ | ✗ | ✗ | ✗ |

**示例：**
```java
public class BankAccount {
    private double balance; // 私有变量，外部不可直接访问
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}
```

### 3.3 继承

```java
// 父类
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " 在吃东西");
    }
}

// 子类
public class Dog extends Animal {
    public Dog(String name) {
        super(name); // 调用父类构造方法
    }
    
    // 重写父类方法
    @Override
    public void eat() {
        System.out.println(name + " 在吃骨头");
    }
    
    // 新增方法
    public void bark() {
        System.out.println(name + " 在汪汪叫");
    }
}

// 使用
Dog dog = new Dog("旺财");
dog.eat();  // 旺财 在吃骨头
dog.bark(); // 旺财 在汪汪叫
```

**要点：**
- Java 只支持**单继承**（一个类只能继承一个父类）
- 使用 `super` 调用父类的构造方法或方法
- 使用 `@Override` 注解标记重写的方法（推荐）

### 3.4 多态

```java
// 父类引用指向子类对象
Animal animal = new Dog("小黑");
animal.eat(); // 小黑 在吃骨头（调用子类的方法）

// 多态数组
Animal[] animals = {
    new Dog("小黑"),
    new Animal("动物A")
};
for (Animal a : animals) {
    a.eat(); // 根据实际对象类型调用相应方法
}
```

### 3.5 抽象类与接口

**抽象类：**
```java
public abstract class Shape {
    // 抽象方法（没有实现）
    public abstract double area();
    
    // 普通方法
    public void display() {
        System.out.println("这是一个图形");
    }
}

public class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}
```

**接口：**
```java
public interface Flyable {
    void fly(); // 接口方法默认是 public abstract
}

public class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("鸟儿在飞");
    }
}

// 一个类可以实现多个接口
public class SuperBird implements Flyable, Runnable {
    @Override
    public void fly() {
        System.out.println("超级鸟在飞");
    }
    
    @Override
    public void run() {
        System.out.println("超级鸟在跑");
    }
}
```

**抽象类 vs 接口：**
| 特性 | 抽象类 | 接口 |
|------|--------|------|
| 多继承 | ✗（单继承） | ✓（多实现） |
| 成员变量 | 可以有普通成员变量 | 只能有常量（public static final） |
| 方法 | 可以有普通方法和抽象方法 | 默认抽象方法（Java 8+ 可以有默认方法） |
| 构造方法 | 可以有 | 不能有 |

---

## 4. 常用类与API

### 4.1 String 类

```java
String s1 = "Hello";
String s2 = "World";

// 字符串连接
String s3 = s1 + " " + s2; // "Hello World"
String s4 = s1.concat(" ").concat(s2); // "Hello World"

// 常用方法
int len = s1.length();           // 5
char c = s1.charAt(0);           // 'H'
boolean empty = s1.isEmpty();    // false
String lower = s1.toLowerCase(); // "hello"
String upper = s1.toUpperCase(); // "HELLO"

// 子串
String sub = s3.substring(0, 5); // "Hello"

// 查找
int index = s3.indexOf("World"); // 6
boolean contains = s3.contains("lo"); // true

// 替换
String replaced = s3.replace("World", "Java"); // "Hello Java"

// 分割
String text = "apple,banana,orange";
String[] fruits = text.split(","); // ["apple", "banana", "orange"]

// 比较
boolean equal = s1.equals("Hello"); // true（内容相同）
boolean same = (s1 == "Hello");     // 可能为 false（引用比较）
```

**注意：**
- String 是**不可变**的（immutable），修改字符串会创建新对象
- 使用 `equals()` 比较内容，使用 `==` 比较引用

**StringBuilder（可变字符串）：**
```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");     // 追加
sb.insert(5, ",");       // 插入
sb.delete(5, 6);         // 删除
String result = sb.toString(); // "Hello World"
```

### 4.2 包装类

Java 为每种基本类型提供了对应的包装类：

| 基本类型 | 包装类 |
|----------|--------|
| byte | Byte |
| short | Short |
| int | Integer |
| long | Long |
| float | Float |
| double | Double |
| char | Character |
| boolean | Boolean |

**自动装箱与拆箱：**
```java
// 自动装箱（基本类型 → 包装类）
Integer i = 10; // 相当于 Integer.valueOf(10)

// 自动拆箱（包装类 → 基本类型）
int j = i; // 相当于 i.intValue()

// 常用方法
int num = Integer.parseInt("123"); // 字符串转整数
String str = Integer.toString(123); // 整数转字符串
```

### 4.3 Math 类

```java
double abs = Math.abs(-10);        // 10.0（绝对值）
double max = Math.max(10, 20);     // 20.0
double min = Math.min(10, 20);     // 10.0
double pow = Math.pow(2, 3);       // 8.0（2的3次方）
double sqrt = Math.sqrt(16);       // 4.0（平方根）
double random = Math.random();     // [0.0, 1.0) 随机数

// 三角函数
double sin = Math.sin(Math.PI / 2); // 1.0
```

### 4.4 日期与时间（Java 8+）

```java
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

// 当前日期
LocalDate today = LocalDate.now(); // 2026-09-14
System.out.println(today.getYear());  // 2026
System.out.println(today.getMonthValue()); // 9
System.out.println(today.getDayOfMonth()); // 14

// 当前时间
LocalTime now = LocalTime.now(); // 14:30:00
System.out.println(now.getHour()); // 14

// 日期时间
LocalDateTime dateTime = LocalDateTime.now(); // 2026-09-14T14:30:00

// 创建特定日期
LocalDate birthday = LocalDate.of(2000, 1, 1); // 2000-01-01

// 日期计算
LocalDate tomorrow = today.plusDays(1);
LocalDate nextWeek = today.plusWeeks(1);
```

---

## 5. 异常处理

### 5.1 异常类型

Java 的异常分为两类：
- **受检异常（Checked Exception）**：编译时必须处理，如 `IOException`
- **非受检异常（Unchecked Exception）**：运行时异常，如 `NullPointerException`

### 5.2 try-catch-finally

```java
try {
    int result = 10 / 0; // 可能抛出异常的代码
} catch (ArithmeticException e) {
    System.out.println("除数不能为0：" + e.getMessage());
} finally {
    System.out.println("无论是否异常，都会执行");
}
```

**多个 catch：**
```java
try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[10]); // 数组越界
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("数组越界");
} catch (Exception e) {
    System.out.println("其他异常");
}
```

### 5.3 抛出异常

```java
public void divide(int a, int b) throws ArithmeticException {
    if (b == 0) {
        throw new ArithmeticException("除数不能为0");
    }
    System.out.println(a / b);
}
```

### 5.4 自定义异常

```java
public class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}

public void checkAge(int age) throws MyException {
    if (age < 0) {
        throw new MyException("年龄不能为负数");
    }
}
```

---

## 6. 集合框架

Java 集合框架提供了常用的数据结构。

### 6.1 List（列表）

**ArrayList（动态数组）：**
```java
import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();

// 添加元素
list.add("Apple");
list.add("Banana");
list.add("Orange");

// 访问元素
String first = list.get(0); // "Apple"

// 修改元素
list.set(1, "Blueberry");

// 删除元素
list.remove(0); // 删除索引0的元素
list.remove("Orange"); // 删除指定元素

// 大小
int size = list.size(); // 2

// 遍历
for (String fruit : list) {
    System.out.println(fruit);
}
```

**LinkedList（链表）：**
```java
import java.util.LinkedList;

LinkedList<Integer> linkedList = new LinkedList<>();
linkedList.add(1);
linkedList.add(2);
linkedList.addFirst(0); // 在开头添加
linkedList.addLast(3);  // 在末尾添加
```

### 6.2 Set（集合）

**HashSet（无序、不重复）：**
```java
import java.util.HashSet;

HashSet<String> set = new HashSet<>();
set.add("Java");
set.add("Python");
set.add("Java"); // 重复元素不会添加

System.out.println(set.size()); // 2
System.out.println(set.contains("Java")); // true
```

### 6.3 Map（映射）

**HashMap（键值对）：**
```java
import java.util.HashMap;

HashMap<String, Integer> map = new HashMap<>();

// 添加键值对
map.put("Alice", 85);
map.put("Bob", 90);
map.put("Charlie", 78);

// 获取值
int score = map.get("Alice"); // 85

// 判断键是否存在
boolean exists = map.containsKey("Bob"); // true

// 遍历
for (String name : map.keySet()) {
    System.out.println(name + ": " + map.get(name));
}

// 或使用 entrySet
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

### 6.4 集合工具类

```java
import java.util.Collections;
import java.util.ArrayList;

ArrayList<Integer> list = new ArrayList<>();
list.add(3);
list.add(1);
list.add(2);

// 排序
Collections.sort(list); // [1, 2, 3]

// 反转
Collections.reverse(list); // [3, 2, 1]

// 最大值/最小值
int max = Collections.max(list); // 3
int min = Collections.min(list); // 1
```

---

## 7. 文件操作与IO

### 7.1 读取文件

```java
import java.io.File;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;

public class FileReadExample {
    public static void main(String[] args) {
        try {
            File file = new File("data.txt");
            BufferedReader reader = new BufferedReader(new FileReader(file));
            
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### 7.2 写入文件

```java
import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;

public class FileWriteExample {
    public static void main(String[] args) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"));
            
            writer.write("Hello, Java!");
            writer.newLine();
            writer.write("File I/O is easy.");
            
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### 7.3 try-with-resources（自动关闭资源）

```java
import java.io.*;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        // reader 会自动关闭，无需手动调用 close()
    }
}
```

---

## 8. 多线程基础

### 8.1 创建线程

**方法1：继承 Thread 类**
```java
public class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}

// 使用
MyThread t1 = new MyThread();
t1.start(); // 启动线程
```

**方法2：实现 Runnable 接口**
```java
public class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}

// 使用
Thread t2 = new Thread(new MyRunnable());
t2.start();
```

**方法3：Lambda 表达式（Java 8+）**
```java
Thread t3 = new Thread(() -> {
    for (int i = 0; i < 5; i++) {
        System.out.println(Thread.currentThread().getName() + ": " + i);
    }
});
t3.start();
```

### 8.2 线程同步

**synchronized 关键字：**
```java
public class Counter {
    private int count = 0;
    
    // 同步方法
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}

// 使用
Counter counter = new Counter();

Thread t1 = new Thread(() -> {
    for (int i = 0; i < 1000; i++) {
        counter.increment();
    }
});

Thread t2 = new Thread(() -> {
    for (int i = 0; i < 1000; i++) {
        counter.increment();
    }
});

t1.start();
t2.start();

t1.join(); // 等待 t1 完成
t2.join(); // 等待 t2 完成

System.out.println("Count: " + counter.getCount()); // 2000
```

---

## 9. 学习建议与资源

### 9.1 学习路径

1. **基础语法**（1-2周）：数据类型、控制流、数组
2. **面向对象**（2-3周）：类、继承、多态、接口
3. **常用类与API**（1周）：String、集合框架、日期时间
4. **异常处理与IO**（1周）
5. **进阶主题**：多线程、网络编程、数据库操作（JDBC）

### 9.2 练习建议

- **每天敲代码**：看懂≠会写，动手是关键
- **做小项目**：学生管理系统、记事本、计算器
- **刷题**：LeetCode、牛客网
- **看源码**：ArrayList、HashMap 等

### 9.3 推荐资源

**书籍：**
- 《Java核心技术 卷I》（Core Java）
- 《Head First Java》（生动有趣，适合入门）
- 《Effective Java》（进阶必读）

**在线资源：**
- [Oracle 官方文档](https://docs.oracle.com/javase/tutorial/)
- [菜鸟教程](https://www.runoob.com/java/java-tutorial.html)
- [LeetCode](https://leetcode.cn/)

**IDE 推荐：**
- IntelliJ IDEA（功能强大，推荐）
- Eclipse（免费，轻量）
- VS Code + Java 插件

### 9.4 与 C/C++ 的对比总结

| 特性 | C/C++ | Java |
|------|-------|------|
| 内存管理 | 手动（malloc/free, new/delete） | 自动（垃圾回收） |
| 指针 | 有 | 无（用引用） |
| 多继承 | 支持 | 不支持（用接口） |
| 跨平台 | 需要重新编译 | 一次编译，到处运行 |
| 性能 | 更快 | 稍慢（但已很快） |
| 编译 | 编译成机器码 | 编译成字节码 |

---

## 附录：常见错误与解决

### A.1 NullPointerException
```java
String s = null;
System.out.println(s.length()); // 抛出 NullPointerException

// 解决：使用前检查
if (s != null) {
    System.out.println(s.length());
}
```

### A.2 ArrayIndexOutOfBoundsException
```java
int[] arr = {1, 2, 3};
System.out.println(arr[10]); // 抛出 ArrayIndexOutOfBoundsException

// 解决：检查索引范围
if (index >= 0 && index < arr.length) {
    System.out.println(arr[index]);
}
```

### A.3 ClassCastException
```java
Object obj = "Hello";
Integer num = (Integer) obj; // 抛出 ClassCastException

// 解决：使用 instanceof 检查
if (obj instanceof Integer) {
    Integer num = (Integer) obj;
}
```

---

**祝学习顺利！有问题随时查阅这份课件 😊**
