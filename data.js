// 学习数据结构
const learningData = {
    chapters: [
        {
            id: 1,
            name: "Java 简介与环境搭建",
            icon: "🚀",
            locked: false,
            sections: [
                {
                    title: "Java 是什么?",
                    content: `
                        <h3>Java 是什么?</h3>
                        <p>Java 是一种<strong>面向对象</strong>的编程语言,由 Sun Microsystems(现 Oracle)开发。</p>

                        <div class="key-point">
                            <h4>🎯 Java 的核心理念</h4>
                            <p><strong>"Write Once, Run Anywhere"(一次编写,到处运行)</strong></p>
                            <p>这意味着你只需要编写一次代码,就可以在任何安装了 JVM 的平台上运行,无需重新编译。</p>
                        </div>

                        <h3>Java 的工作原理</h3>
                        <p>Java 程序的运行过程:</p>
                        <ol>
                            <li><strong>编写</strong>: 创建 .java 源代码文件</li>
                            <li><strong>编译</strong>: 使用 javac 编译器,生成 <strong>.class 字节码文件</strong></li>
                            <li><strong>运行</strong>: JVM(Java虚拟机)执行字节码</li>
                        </ol>
                        <pre><code>HelloWorld.java  →  javac编译  →  HelloWorld.class  →  JVM运行</code></pre>

                        <div class="compare-box">
                            <h4>💡 与 C/C++ 的主要区别:</h4>
                            <ul>
                                <li><strong>自动内存管理</strong>: Java 有垃圾回收(GC)机制,会自动释放不再使用的内存,不需要手动 free 或 delete</li>
                                <li><strong>没有指针</strong>: Java 用引用代替指针,更安全,避免指针错误</li>
                                <li><strong>跨平台</strong>: C/C++ 编译成机器码,Java 编译成字节码在 JVM 上运行</li>
                                <li><strong>纯面向对象</strong>: 一切皆对象(除基本类型如 int、char)</li>
                            </ul>
                        </div>
                    `
                },
                {
                    title: "环境搭建",
                    content: `
                        <h3>环境搭建</h3>
                        <p><strong>安装 JDK(Java Development Kit):</strong></p>
                        <ol>
                            <li>下载: <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank">Oracle JDK</a> 或 <a href="https://openjdk.org/" target="_blank">OpenJDK</a></li>
                            <li>安装后配置环境变量 JAVA_HOME 和 PATH</li>
                            <li>验证安装:</li>
                        </ol>
                        <pre><code>java -version
javac -version</code></pre>

                        <h3>编写第一个程序</h3>
                        <pre><code>// HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}</code></pre>

                        <p><strong>编译与运行:</strong></p>
                        <pre><code>javac HelloWorld.java  # 编译,生成 HelloWorld.class
java HelloWorld        # 运行</code></pre>
                    `
                }
            ],
            quiz: [
                {
                    question: "Java 的核心理念是什么?",
                    options: [
                        "Write Once, Compile Anywhere",
                        "Write Once, Run Anywhere",
                        "Compile Once, Run Everywhere",
                        "Write Everywhere, Run Once"
                    ],
                    correct: 1
                },
                {
                    question: "Java 编译后生成什么文件?",
                    options: [
                        ".exe 可执行文件",
                        ".class 字节码文件",
                        ".obj 目标文件",
                        ".so 动态库文件"
                    ],
                    correct: 1
                },
                {
                    question: "与 C/C++ 相比,Java 的内存管理方式是?",
                    options: [
                        "手动管理,使用 malloc/free",
                        "手动管理,使用 new/delete",
                        "自动管理,有垃圾回收机制",
                        "半自动管理,需要手动释放部分内存"
                    ],
                    correct: 2
                }
            ],
            codingProblems: [
                {
                    title: "编程练习1: Hello World",
                    description: "编写一个 Java 程序,输出 'Hello, Java!'",
                    template: `public class HelloWorld {
    public static void main(String[] args) {
        // 在这里输出 "Hello, Java!"

    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Hello, Java!",
                            description: "输出 Hello, Java!"
                        }
                    ],
                    hints: [
                        "使用 System.out.println() 方法输出内容",
                        "注意字符串要用双引号包裹",
                        "别忘了语句结尾的分号"
                    ],
                    validator: function(code) {
                        // 检查是否包含 System.out.println
                        if (!code.includes('System.out.println')) {
                            return { passed: false, message: '请使用 System.out.println() 输出内容' };
                        }

                        // 提取 println 中的字符串内容
                        const match = code.match(/System\.out\.println\s*\(\s*"([^"]*)"\s*\)/);
                        if (!match) {
                            return { passed: false, message: '请在 println() 中使用双引号包裹字符串' };
                        }

                        const output = match[1];
                        if (output !== 'Hello, Java!') {
                            return {
                                passed: false,
                                message: `输出内容不正确！\n你的输出: "${output}"\n期望输出: "Hello, Java!"`
                            };
                        }

                        return { passed: true, message: '✓ 测试通过！输出内容正确' };
                    }
                },
                {
                    title: "编程练习2: 变量声明与输出",
                    description: "声明一个整数变量 age,赋值为 18,然后输出 'My age is 18'",
                    template: `public class AgeDemo {
    public static void main(String[] args) {
        // 声明变量 age 并赋值为 18

        // 输出 "My age is 18"

    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "My age is 18",
                            description: "正确输出年龄信息"
                        }
                    ],
                    hints: [
                        "使用 int 声明整数变量",
                        "可以使用字符串拼接: \"My age is \" + age",
                        "变量名区分大小写"
                    ],
                    validator: function(code) {
                        // 检查是否声明了 age 变量
                        if (!code.match(/int\s+age\s*=/)) {
                            return { passed: false, message: '请声明 int 类型的 age 变量' };
                        }

                        // 检查是否赋值为 18
                        if (!code.match(/age\s*=\s*18/)) {
                            return { passed: false, message: '请将 age 赋值为 18' };
                        }

                        // 检查是否有输出语句
                        if (!code.includes('System.out.println')) {
                            return { passed: false, message: '请使用 System.out.println() 输出内容' };
                        }

                        // 检查输出内容：支持多种形式
                        // 1. "My age is 18" (直接字符串)
                        // 2. "My age is " + age (字符串拼接)
                        // 3. "My age is " + 18 (字符串拼接数字)
                        const hasDirectString = code.includes('"My age is 18"');
                        const hasConcatWithVar = code.match(/println\s*\([^)]*"My age is "\s*\+\s*age[^)]*\)/);
                        const hasConcatWith18 = code.match(/println\s*\([^)]*"My age is "\s*\+\s*18[^)]*\)/);

                        if (!hasDirectString && !hasConcatWithVar && !hasConcatWith18) {
                            return {
                                passed: false,
                                message: '输出内容不正确！\n期望输出: "My age is 18"\n提示: 使用 "My age is " + age 或直接输出 "My age is 18"'
                            };
                        }

                        return { passed: true, message: '✓ 测试通过！变量声明和输出都正确' };
                    }
                }
            ]
        },
        {
            id: 2,
            name: "Java 基础语法",
            icon: "📝",
            locked: true,
            sections: [
                {
                    title: "数据类型",
                    content: `
                        <h3>基本数据类型(8种)</h3>
                        <pre><code>byte    b = 127;        // 1字节, -128 ~ 127
short   s = 32767;      // 2字节
int     i = 2147483647; // 4字节(默认整数类型)
long    l = 9223372036854775807L; // 8字节,注意后缀 L

float   f = 3.14f;      // 4字节,注意后缀 f
double  d = 3.14159;    // 8字节(默认浮点类型)

char    c = 'A';        // 2字节, Unicode字符
boolean flag = true;    // true 或 false</code></pre>

                        <div class="compare-box">
                            <h4>🔍 与 C/C++ 的区别:</h4>
                            <ul>
                                <li>Java 的 <code>boolean</code> 不能与整数互转(C/C++ 中 0 为假,非 0 为真)</li>
                                <li>Java 的 <code>char</code> 是 2 字节(Unicode), C/C++ 是 1 字节(ASCII)</li>
                                <li>Java 没有 <code>unsigned</code> 类型</li>
                            </ul>
                        </div>

                        <h3>引用类型</h3>
                        <ul>
                            <li>类(Class)</li>
                            <li>接口(Interface)</li>
                            <li>数组(Array)</li>
                            <li>字符串(String)</li>
                        </ul>
                    `
                },
                {
                    title: "变量与常量",
                    content: `
                        <h3>变量与常量</h3>
                        <pre><code>// 变量声明
int age = 18;
String name = "张三";

// 常量(用 final 关键字)
final double PI = 3.14159;
final int MAX_SIZE = 100;</code></pre>
                    `
                },
                {
                    title: "运算符",
                    content: `
                        <h3>运算符</h3>
                        <p>与 C/C++ 基本相同:</p>
                        <pre><code>// 算术运算符
int a = 10, b = 3;
int sum = a + b;       // 13
int diff = a - b;      // 7
int product = a * b;   // 30
int quotient = a / b;  // 3(整数除法)
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
a++;     // a = a + 1</code></pre>

                        <div class="key-point">
                            <h4>💡 特殊: 字符串连接</h4>
                            <pre><code>String s = "Hello" + " " + "World"; // "Hello World"
String msg = "Age: " + 18;          // "Age: 18"(自动转换)</code></pre>
                        </div>
                    `
                },
                {
                    title: "控制流",
                    content: `
                        <h3>条件语句</h3>
                        <pre><code>// if-else
int score = 85;
if (score >= 90) {
    System.out.println("优秀");
} else if (score >= 60) {
    System.out.println("及格");
} else {
    System.out.println("不及格");
}

// switch(Java 7+ 支持 String)
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
}</code></pre>

                        <h3>循环语句</h3>
                        <pre><code>// for 循环
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// 增强 for 循环(foreach)
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
} while (j < 5);</code></pre>
                    `
                },
                {
                    title: "数组",
                    content: `
                        <h3>数组</h3>
                        <pre><code>// 声明与初始化
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
System.out.println(matrix[1][2]); // 6</code></pre>

                        <div class="compare-box">
                            <h4>🔍 与 C/C++ 的区别:</h4>
                            <ul>
                                <li>Java 数组有 <code>.length</code> 属性(C/C++ 需要手动记录长度)</li>
                                <li>Java 数组越界会抛出异常(C/C++ 可能导致未定义行为)</li>
                                <li>Java 数组是对象,存储在堆上</li>
                            </ul>
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "Java 中有多少种基本数据类型?",
                    options: ["6种", "7种", "8种", "9种"],
                    correct: 2
                },
                {
                    question: "Java 中声明常量使用什么关键字?",
                    options: ["const", "final", "static", "constant"],
                    correct: 1
                },
                {
                    question: "Java 数组的长度如何获取?",
                    options: ["arr.size()", "arr.length", "arr.length()", "sizeof(arr)"],
                    correct: 1
                }
            ],
            codingProblems: [
                {
                    title: "编程练习1: 数据类型与变量",
                    description: "声明不同类型的变量并输出它们的值",
                    template: `public class DataTypes {
    public static void main(String[] args) {
        // 声明一个整数变量 age，赋值为 20

        // 声明一个浮点数变量 height，赋值为 1.75

        // 声明一个字符变量 grade，赋值为 'A'

        // 声明一个布尔变量 isPassed，赋值为 true

        // 输出所有变量，格式: "Age: 20, Height: 1.75, Grade: A, Passed: true"

    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Age: 20, Height: 1.75, Grade: A, Passed: true",
                            description: "正确声明和输出所有变量"
                        }
                    ],
                    hints: [
                        "使用 int, double, char, boolean 声明变量",
                        "注意 char 用单引号，String 用双引号",
                        "可以用 + 连接字符串和变量"
                    ],
                    validator: function(code) {
                        const checks = [
                            { pattern: /int\s+age\s*=\s*20/, message: '请声明 int age = 20' },
                            { pattern: /double\s+height\s*=\s*1\.75/, message: '请声明 double height = 1.75' },
                            { pattern: /char\s+grade\s*=\s*'A'/, message: "请声明 char grade = 'A'" },
                            { pattern: /boolean\s+isPassed\s*=\s*true/, message: '请声明 boolean isPassed = true' }
                        ];

                        for (const check of checks) {
                            if (!code.match(check.pattern)) {
                                return { passed: false, message: check.message };
                            }
                        }

                        if (!code.includes('System.out.println')) {
                            return { passed: false, message: '请使用 System.out.println() 输出结果' };
                        }

                        return { passed: true, message: '✓ 测试通过！所有变量声明正确' };
                    }
                },
                {
                    title: "编程练习2: 条件判断",
                    description: "根据分数判断等级：90以上优秀，60-89及格，60以下不及格",
                    template: `public class GradeChecker {
    public static void main(String[] args) {
        int score = 85;
        // 使用 if-else 判断并输出等级

    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "及格",
                            description: "分数85应输出'及格'"
                        }
                    ],
                    hints: [
                        "使用 if-else if-else 结构",
                        "注意判断顺序：先判断 >= 90",
                        "输出内容要完全匹配：'优秀'、'及格'或'不及格'"
                    ],
                    validator: function(code) {
                        if (!code.match(/if\s*\(\s*score\s*>=\s*90\s*\)/)) {
                            return { passed: false, message: '请先判断 score >= 90' };
                        }

                        if (!code.match(/else\s+if\s*\(\s*score\s*>=\s*60\s*\)/)) {
                            return { passed: false, message: '请使用 else if 判断 score >= 60' };
                        }

                        if (!code.includes('及格')) {
                            return { passed: false, message: "请在60-89分支输出'及格'" };
                        }

                        return { passed: true, message: '✓ 测试通过！条件判断正确' };
                    }
                },
                {
                    title: "编程练习3: 数组求和",
                    description: "计算数组 {10, 20, 30, 40, 50} 的总和并输出",
                    template: `public class ArraySum {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        // 使用循环计算总和

        // 输出结果，格式: "Sum: 150"

    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Sum: 150",
                            description: "正确计算数组总和"
                        }
                    ],
                    hints: [
                        "声明一个变量 sum = 0 存储总和",
                        "使用 for 循环遍历数组",
                        "可以用 for (int num : numbers) 增强for循环"
                    ],
                    validator: function(code) {
                        if (!code.match(/int\s+sum\s*=\s*0/)) {
                            return { passed: false, message: '请声明 int sum = 0 存储总和' };
                        }

                        const hasForLoop = code.includes('for') && (code.includes('numbers') || code.includes('numbers.length'));
                        if (!hasForLoop) {
                            return { passed: false, message: '请使用 for 循环遍历数组' };
                        }

                        if (!code.includes('Sum: ')) {
                            return { passed: false, message: "请输出格式为 'Sum: 150'" };
                        }

                        return { passed: true, message: '✓ 测试通过！数组求和正确' };
                    }
                }
            ]
        },
        {
            id: 3,
            name: "面向对象编程",
            icon: "🎯",
            locked: true,
            sections: [
                {
                    title: "类与对象",
                    content: `
                        <h3>定义类</h3>
                        <pre><code>public class Student {
    // 成员变量(属性)
    private String name;
    private int age;

    // 构造方法
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 方法
    public void introduce() {
        System.out.println("我叫" + name + ",今年" + age + "岁");
    }

    // Getter 和 Setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}</code></pre>

                        <h3>创建对象</h3>
                        <pre><code>Student s1 = new Student("张三", 18);
s1.introduce(); // 我叫张三,今年18岁

Student s2 = new Student("李四", 20);
System.out.println(s2.getName()); // 李四</code></pre>

                        <div class="compare-box">
                            <h4>🔍 与 C++ 的区别:</h4>
                            <ul>
                                <li>Java 没有析构函数(由垃圾回收器自动管理)</li>
                                <li>Java 对象必须用 <code>new</code> 创建(不能在栈上创建)</li>
                                <li>Java 的 <code>this</code> 类似 C++ 的 <code>this</code>,但不是指针</li>
                            </ul>
                        </div>
                    `
                },
                {
                    title: "封装",
                    content: `
                        <h3>封装</h3>
                        <p>封装是将数据和方法包装在类中,通过访问修饰符控制访问权限。</p>

                        <h4>访问修饰符:</h4>
                        <table>
                            <tr>
                                <th>修饰符</th>
                                <th>同一类</th>
                                <th>同一包</th>
                                <th>子类</th>
                                <th>其他包</th>
                            </tr>
                            <tr>
                                <td>public</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td>protected</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✗</td>
                            </tr>
                            <tr>
                                <td>默认(无修饰符)</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✗</td>
                                <td>✗</td>
                            </tr>
                            <tr>
                                <td>private</td>
                                <td>✓</td>
                                <td>✗</td>
                                <td>✗</td>
                                <td>✗</td>
                            </tr>
                        </table>

                        <h4>示例:</h4>
                        <pre><code>public class BankAccount {
    private double balance; // 私有变量,外部不可直接访问

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}</code></pre>
                    `
                },
                {
                    title: "继承",
                    content: `
                        <h3>继承</h3>
                        <pre><code>// 父类
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
dog.bark(); // 旺财 在汪汪叫</code></pre>

                        <div class="key-point">
                            <h4>💡 要点:</h4>
                            <ul>
                                <li>Java 只支持<strong>单继承</strong>(一个类只能继承一个父类)</li>
                                <li>使用 <code>super</code> 调用父类的构造方法或方法</li>
                                <li>使用 <code>@Override</code> 注解标记重写的方法(推荐)</li>
                            </ul>
                        </div>
                    `
                },
                {
                    title: "多态",
                    content: `
                        <h3>多态</h3>
                        <pre><code>// 父类引用指向子类对象
Animal animal = new Dog("小黑");
animal.eat(); // 小黑 在吃骨头(调用子类的方法)

// 多态数组
Animal[] animals = {
    new Dog("小黑"),
    new Animal("动物A")
};
for (Animal a : animals) {
    a.eat(); // 根据实际对象类型调用相应方法
}</code></pre>
                    `
                },
                {
                    title: "抽象类与接口",
                    content: `
                        <h3>抽象类</h3>
                        <pre><code>public abstract class Shape {
    // 抽象方法(没有实现)
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
}</code></pre>

                        <h3>接口</h3>
                        <pre><code>public interface Flyable {
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
}</code></pre>

                        <h4>抽象类 vs 接口:</h4>
                        <table>
                            <tr>
                                <th>特性</th>
                                <th>抽象类</th>
                                <th>接口</th>
                            </tr>
                            <tr>
                                <td>多继承</td>
                                <td>✗(单继承)</td>
                                <td>✓(多实现)</td>
                            </tr>
                            <tr>
                                <td>成员变量</td>
                                <td>可以有普通成员变量</td>
                                <td>只能有常量</td>
                            </tr>
                            <tr>
                                <td>方法</td>
                                <td>可以有普通方法和抽象方法</td>
                                <td>默认抽象方法</td>
                            </tr>
                            <tr>
                                <td>构造方法</td>
                                <td>可以有</td>
                                <td>不能有</td>
                            </tr>
                        </table>
                    `
                }
            ],
            quiz: [
                {
                    question: "Java 支持多继承吗?",
                    options: [
                        "支持,可以继承多个类",
                        "不支持,只能继承一个类",
                        "支持,但需要特殊语法",
                        "部分支持"
                    ],
                    correct: 1
                },
                {
                    question: "以下哪个访问修饰符的访问权限最大?",
                    options: ["private", "default", "protected", "public"],
                    correct: 3
                },
                {
                    question: "接口和抽象类的主要区别是什么?",
                    options: [
                        "接口不能有方法",
                        "抽象类不能有构造方法",
                        "接口支持多实现,抽象类只能单继承",
                        "没有区别"
                    ],
                    correct: 2
                }
            ],
            codingProblems: [
                {
                    title: "编程练习1: 创建类和对象",
                    description: "创建一个 Person 类，包含姓名和年龄属性，并创建对象输出信息",
                    template: `public class Person {
    // 声明私有成员变量: name(String) 和 age(int)

    // 创建构造方法

    // 创建 introduce() 方法，输出 "My name is [name], I am [age] years old"

    public static void main(String[] args) {
        // 创建 Person 对象，姓名"Tom"，年龄25

        // 调用 introduce() 方法

    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "My name is Tom, I am 25 years old",
                            description: "正确创建对象并输出信息"
                        }
                    ],
                    hints: [
                        "使用 private 修饰成员变量",
                        "构造方法名与类名相同",
                        "使用 this.name = name 赋值"
                    ],
                    validator: function(code) {
                        if (!code.match(/private\s+String\s+name/)) {
                            return { passed: false, message: '请声明私有成员变量 private String name' };
                        }

                        if (!code.match(/private\s+int\s+age/)) {
                            return { passed: false, message: '请声明私有成员变量 private int age' };
                        }

                        if (!code.match(/public\s+Person\s*\(/)) {
                            return { passed: false, message: '请创建构造方法 public Person(...)' };
                        }

                        if (!code.match(/public\s+void\s+introduce\s*\(\s*\)/)) {
                            return { passed: false, message: '请创建 introduce() 方法' };
                        }

                        if (!code.match(/new\s+Person\s*\(\s*"Tom"\s*,\s*25\s*\)/)) {
                            return { passed: false, message: '请创建 Person 对象，参数为 "Tom" 和 25' };
                        }

                        return { passed: true, message: '✓ 测试通过！类和对象创建正确' };
                    }
                },
                {
                    title: "编程练习2: 方法重载",
                    description: "创建 Calculator 类，实现 add 方法的重载（两个参数和三个参数）",
                    template: `public class Calculator {
    // 创建 add 方法，接受两个 int 参数，返回它们的和

    // 重载 add 方法，接受三个 int 参数，返回它们的和

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(10, 20));        // 输出 30
        System.out.println(calc.add(10, 20, 30));    // 输出 60
    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "30\n60",
                            description: "正确实现方法重载"
                        }
                    ],
                    hints: [
                        "方法名相同但参数列表不同就是重载",
                        "两个 add 方法都返回 int 类型",
                        "使用 return a + b 或 return a + b + c"
                    ],
                    validator: function(code) {
                        const add2Params = code.match(/public\s+int\s+add\s*\(\s*int\s+\w+\s*,\s*int\s+\w+\s*\)/g);
                        const add3Params = code.match(/public\s+int\s+add\s*\(\s*int\s+\w+\s*,\s*int\s+\w+\s*,\s*int\s+\w+\s*\)/g);

                        if (!add2Params || add2Params.length < 1) {
                            return { passed: false, message: '请创建接受两个参数的 add 方法' };
                        }

                        if (!add3Params || add3Params.length < 1) {
                            return { passed: false, message: '请重载 add 方法，接受三个参数' };
                        }

                        return { passed: true, message: '✓ 测试通过！方法重载实现正确' };
                    }
                },
                {
                    title: "编程练习3: 继承与多态",
                    description: "创建 Animal 基类和 Dog 子类，实现方法重写",
                    template: `class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    // 重写 makeSound() 方法，输出 "Dog barks: Woof!"

}

public class TestInheritance {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.makeSound();

        Dog dog = new Dog();
        dog.makeSound();
    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Animal makes a sound\nDog barks: Woof!",
                            description: "正确实现继承和方法重写"
                        }
                    ],
                    hints: [
                        "使用 @Override 注解（可选但推荐）",
                        "重写方法的签名必须与父类相同",
                        "输出内容要完全匹配"
                    ],
                    validator: function(code) {
                        if (!code.match(/class\s+Dog\s+extends\s+Animal/)) {
                            return { passed: false, message: '请让 Dog 类继承 Animal 类' };
                        }

                        if (!code.match(/public\s+void\s+makeSound\s*\(\s*\)/g)) {
                            return { passed: false, message: '请在 Dog 类中重写 makeSound() 方法' };
                        }

                        if (!code.includes('Dog barks: Woof!')) {
                            return { passed: false, message: "Dog 的 makeSound() 应输出 'Dog barks: Woof!'" };
                        }

                        return { passed: true, message: '✓ 测试通过！继承和重写实现正确' };
                    }
                }
            ]
        },
        {
            id: 4,
            name: "常用类与API",
            icon: "📚",
            locked: true,
            sections: [
                {
                    title: "String 类",
                    content: `
                        <h3>String 类</h3>
                        <pre><code>String s1 = "Hello";
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
boolean equal = s1.equals("Hello"); // true(内容相同)
boolean same = (s1 == "Hello");     // 可能为 false(引用比较)</code></pre>

                        <div class="key-point">
                            <h4>💡 注意:</h4>
                            <ul>
                                <li>String 是<strong>不可变</strong>的(immutable),修改字符串会创建新对象</li>
                                <li>使用 <code>equals()</code> 比较内容,使用 <code>==</code> 比较引用</li>
                            </ul>
                        </div>

                        <h3>StringBuilder(可变字符串)</h3>
                        <pre><code>StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");     // 追加
sb.insert(5, ",");       // 插入
sb.delete(5, 6);         // 删除
String result = sb.toString(); // "Hello World"</code></pre>
                    `
                },
                {
                    title: "包装类",
                    content: `
                        <h3>包装类</h3>
                        <p>Java 为每种基本类型提供了对应的包装类:</p>
                        <table>
                            <tr>
                                <th>基本类型</th>
                                <th>包装类</th>
                            </tr>
                            <tr><td>byte</td><td>Byte</td></tr>
                            <tr><td>short</td><td>Short</td></tr>
                            <tr><td>int</td><td>Integer</td></tr>
                            <tr><td>long</td><td>Long</td></tr>
                            <tr><td>float</td><td>Float</td></tr>
                            <tr><td>double</td><td>Double</td></tr>
                            <tr><td>char</td><td>Character</td></tr>
                            <tr><td>boolean</td><td>Boolean</td></tr>
                        </table>

                        <h3>自动装箱与拆箱</h3>
                        <pre><code>// 自动装箱(基本类型 → 包装类)
Integer i = 10; // 相当于 Integer.valueOf(10)

// 自动拆箱(包装类 → 基本类型)
int j = i; // 相当于 i.intValue()

// 常用方法
int num = Integer.parseInt("123"); // 字符串转整数
String str = Integer.toString(123); // 整数转字符串</code></pre>
                    `
                },
                {
                    title: "Math 类",
                    content: `
                        <h3>Math 类</h3>
                        <pre><code>double abs = Math.abs(-10);        // 10.0(绝对值)
double max = Math.max(10, 20);     // 20.0
double min = Math.min(10, 20);     // 10.0
double pow = Math.pow(2, 3);       // 8.0(2的3次方)
double sqrt = Math.sqrt(16);       // 4.0(平方根)
double random = Math.random();     // [0.0, 1.0) 随机数

// 三角函数
double sin = Math.sin(Math.PI / 2); // 1.0</code></pre>
                    `
                },
                {
                    title: "日期与时间",
                    content: `
                        <h3>日期与时间(Java 8+)</h3>
                        <pre><code>import java.time.LocalDate;
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
LocalDate nextWeek = today.plusWeeks(1);</code></pre>
                    `
                }
            ],
            quiz: [
                {
                    question: "String 类是否可变?",
                    options: [
                        "可变的",
                        "不可变的",
                        "有时可变有时不可变",
                        "取决于 JVM"
                    ],
                    correct: 1
                },
                {
                    question: "如何正确比较两个字符串的内容?",
                    options: [
                        "使用 ==",
                        "使用 equals()",
                        "使用 compare()",
                        "使用 =="
                    ],
                    correct: 1
                },
                {
                    question: "int 类型对应的包装类是?",
                    options: ["Int", "INTEGER", "Integer", "int"],
                    correct: 2
                }
            ],
            codingProblems: [
                {
                    title: "编程练习1: 接口实现",
                    description: "创建 Flyable 接口和 Bird 类实现该接口",
                    template: `interface Flyable {
    void fly();
}

class Bird implements Flyable {
    // 实现 fly() 方法，输出 "Bird is flying"

}

public class TestInterface {
    public static void main(String[] args) {
        Bird bird = new Bird();
        bird.fly();
    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Bird is flying",
                            description: "正确实现接口"
                        }
                    ],
                    hints: [
                        "使用 implements 关键字实现接口",
                        "必须实现接口中的所有方法",
                        "方法必须是 public"
                    ],
                    validator: function(code) {
                        if (!code.match(/class\s+Bird\s+implements\s+Flyable/)) {
                            return { passed: false, message: '请让 Bird 类实现 Flyable 接口' };
                        }

                        if (!code.match(/public\s+void\s+fly\s*\(\s*\)/)) {
                            return { passed: false, message: '请实现 public void fly() 方法' };
                        }

                        if (!code.includes('Bird is flying')) {
                            return { passed: false, message: "fly() 方法应输出 'Bird is flying'" };
                        }

                        return { passed: true, message: '✓ 测试通过！接口实现正确' };
                    }
                },
                {
                    title: "编程练习2: 抽象类",
                    description: "创建抽象类 Shape 和具体类 Circle，计算面积",
                    template: `abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    // 实现 getArea() 方法，返回圆的面积 (PI * radius * radius)
    // 使用 Math.PI

}

public class TestAbstract {
    public static void main(String[] args) {
        Circle circle = new Circle(5.0);
        System.out.println("Area: " + circle.getArea());
    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Area: 78.53981633974483",
                            description: "正确计算圆的面积"
                        }
                    ],
                    hints: [
                        "使用 Math.PI 获取圆周率",
                        "面积公式：π × r²",
                        "返回 Math.PI * radius * radius"
                    ],
                    validator: function(code) {
                        if (!code.match(/double\s+getArea\s*\(\s*\)/)) {
                            return { passed: false, message: '请实现 getArea() 方法' };
                        }

                        if (!code.includes('Math.PI')) {
                            return { passed: false, message: '请使用 Math.PI 计算面积' };
                        }

                        if (!code.includes('radius * radius')) {
                            return { passed: false, message: '请使用正确的面积公式' };
                        }

                        return { passed: true, message: '✓ 测试通过！抽象类实现正确' };
                    }
                }
            ]
        },
        {
            id: 5,
            name: "异常处理",
            icon: "⚠️",
            locked: true,
            sections: [
                {
                    title: "异常类型",
                    content: `
                        <h3>异常类型</h3>
                        <p>Java 的异常分为两类:</p>
                        <ul>
                            <li><strong>受检异常(Checked Exception)</strong>: 编译时必须处理,如 IOException</li>
                            <li><strong>非受检异常(Unchecked Exception)</strong>: 运行时异常,如 NullPointerException</li>
                        </ul>
                    `
                },
                {
                    title: "try-catch-finally",
                    content: `
                        <h3>try-catch-finally</h3>
                        <pre><code>try {
    int result = 10 / 0; // 可能抛出异常的代码
} catch (ArithmeticException e) {
    System.out.println("除数不能为0: " + e.getMessage());
} finally {
    System.out.println("无论是否异常,都会执行");
}</code></pre>

                        <h3>多个 catch</h3>
                        <pre><code>try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[10]); // 数组越界
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("数组越界");
} catch (Exception e) {
    System.out.println("其他异常");
}</code></pre>
                    `
                },
                {
                    title: "抛出异常",
                    content: `
                        <h3>抛出异常</h3>
                        <pre><code>public void divide(int a, int b) throws ArithmeticException {
    if (b == 0) {
        throw new ArithmeticException("除数不能为0");
    }
    System.out.println(a / b);
}</code></pre>
                    `
                },
                {
                    title: "自定义异常",
                    content: `
                        <h3>自定义异常</h3>
                        <pre><code>public class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}

public void checkAge(int age) throws MyException {
    if (age < 0) {
        throw new MyException("年龄不能为负数");
    }
}</code></pre>
                    `
                }
            ],
            quiz: [
                {
                    question: "finally 块中的代码何时执行?",
                    options: [
                        "只在没有异常时执行",
                        "只在有异常时执行",
                        "无论是否有异常都执行",
                        "从不执行"
                    ],
                    correct: 2
                },
                {
                    question: "以下哪个是受检异常?",
                    options: [
                        "NullPointerException",
                        "ArrayIndexOutOfBoundsException",
                        "IOException",
                        "ArithmeticException"
                    ],
                    correct: 2
                },
                {
                    question: "使用什么关键字抛出异常?",
                    options: ["throws", "throw", "try", "catch"],
                    correct: 1
                }
            ],
            codingProblems: [
                {
                    title: "编程练习1: 异常处理",
                    description: "使用 try-catch 捕获数组越界异常",
                    template: `public class ExceptionTest {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};

        // 使用 try-catch 捕获异常
        // 尝试访问 numbers[5]
        // 在 catch 中输出 "Array index out of bounds!"

    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Array index out of bounds!",
                            description: "正确捕获并处理异常"
                        }
                    ],
                    hints: [
                        "使用 try { } catch (异常类型 e) { }",
                        "捕获 ArrayIndexOutOfBoundsException 或 Exception",
                        "在 catch 块中输出错误信息"
                    ],
                    validator: function(code) {
                        if (!code.includes('try')) {
                            return { passed: false, message: '请使用 try 块' };
                        }

                        if (!code.includes('catch')) {
                            return { passed: false, message: '请使用 catch 块捕获异常' };
                        }

                        if (!code.includes('numbers[5]')) {
                            return { passed: false, message: '请尝试访问 numbers[5]' };
                        }

                        if (!code.includes('Array index out of bounds!')) {
                            return { passed: false, message: "请在 catch 中输出 'Array index out of bounds!'" };
                        }

                        return { passed: true, message: '✓ 测试通过！异常处理正确' };
                    }
                }
            ]
        },
        {
            id: 6,
            name: "集合框架",
            icon: "📦",
            locked: true,
            sections: [
                {
                    title: "List 列表",
                    content: `
                        <h3>ArrayList(动态数组)</h3>
                        <pre><code>import java.util.ArrayList;

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
}</code></pre>

                        <h3>LinkedList(链表)</h3>
                        <pre><code>import java.util.LinkedList;

LinkedList<Integer> linkedList = new LinkedList<>();
linkedList.add(1);
linkedList.add(2);
linkedList.addFirst(0); // 在开头添加
linkedList.addLast(3);  // 在末尾添加</code></pre>
                    `
                },
                {
                    title: "Set 集合",
                    content: `
                        <h3>HashSet(无序、不重复)</h3>
                        <pre><code>import java.util.HashSet;

HashSet<String> set = new HashSet<>();
set.add("Java");
set.add("Python");
set.add("Java"); // 重复元素不会添加

System.out.println(set.size()); // 2
System.out.println(set.contains("Java")); // true</code></pre>
                    `
                },
                {
                    title: "Map 映射",
                    content: `
                        <h3>HashMap(键值对)</h3>
                        <pre><code>import java.util.HashMap;

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
}</code></pre>
                    `
                },
                {
                    title: "集合工具类",
                    content: `
                        <h3>集合工具类</h3>
                        <pre><code>import java.util.Collections;
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
int min = Collections.min(list); // 1</code></pre>
                    `
                }
            ],
            quiz: [
                {
                    question: "ArrayList 和 LinkedList 的主要区别是什么?",
                    options: [
                        "ArrayList 基于数组,LinkedList 基于链表",
                        "ArrayList 基于链表,LinkedList 基于数组",
                        "没有区别",
                        "ArrayList 不能存储对象"
                    ],
                    correct: 0
                },
                {
                    question: "HashSet 的特点是什么?",
                    options: [
                        "有序、可重复",
                        "无序、可重复",
                        "有序、不可重复",
                        "无序、不可重复"
                    ],
                    correct: 3
                },
                {
                    question: "HashMap 存储的是什么?",
                    options: [
                        "只有键",
                        "只有值",
                        "键值对",
                        "数组"
                    ],
                    correct: 2
                }
            ],
            codingProblems: [
                {
                    title: "编程练习1: ArrayList 使用",
                    description: "创建 ArrayList，添加元素并输出",
                    template: `import java.util.ArrayList;

public class ArrayListTest {
    public static void main(String[] args) {
        // 创建 ArrayList<String>

        // 添加三个元素: "Apple", "Banana", "Orange"

        // 输出列表大小，格式: "Size: 3"

        // 输出第一个元素，格式: "First: Apple"

    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Size: 3\nFirst: Apple",
                            description: "正确使用 ArrayList"
                        }
                    ],
                    hints: [
                        "使用 new ArrayList<>()",
                        "使用 add() 方法添加元素",
                        "使用 size() 获取大小，get(0) 获取第一个元素"
                    ],
                    validator: function(code) {
                        if (!code.includes('ArrayList')) {
                            return { passed: false, message: '请创建 ArrayList' };
                        }

                        if (!code.includes('.add(')) {
                            return { passed: false, message: '请使用 add() 方法添加元素' };
                        }

                        if (!code.includes('.size()')) {
                            return { passed: false, message: '请使用 size() 方法获取列表大小' };
                        }

                        if (!code.includes('.get(0)')) {
                            return { passed: false, message: '请使用 get(0) 获取第一个元素' };
                        }

                        return { passed: true, message: '✓ 测试通过！ArrayList 使用正确' };
                    }
                },
                {
                    title: "编程练习2: HashMap 使用",
                    description: "使用 HashMap 存储学生成绩并查询",
                    template: `import java.util.HashMap;

public class HashMapTest {
    public static void main(String[] args) {
        // 创建 HashMap<String, Integer>

        // 添加数据: "Tom" -> 85, "Jerry" -> 90

        // 输出 Tom 的成绩，格式: "Tom's score: 85"

        // 输出 Map 大小，格式: "Total students: 2"

    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Tom's score: 85\nTotal students: 2",
                            description: "正确使用 HashMap"
                        }
                    ],
                    hints: [
                        "使用 new HashMap<>()",
                        "使用 put(key, value) 添加数据",
                        "使用 get(key) 获取值"
                    ],
                    validator: function(code) {
                        if (!code.includes('HashMap')) {
                            return { passed: false, message: '请创建 HashMap' };
                        }

                        if (!code.includes('.put(')) {
                            return { passed: false, message: '请使用 put() 方法添加数据' };
                        }

                        if (!code.includes('.get(')) {
                            return { passed: false, message: '请使用 get() 方法获取值' };
                        }

                        return { passed: true, message: '✓ 测试通过！HashMap 使用正确' };
                    }
                }
            ]
        },
        {
            id: 7,
            name: "文件操作与IO",
            icon: "📄",
            locked: true,
            sections: [
                {
                    title: "读取文件",
                    content: `
                        <h3>读取文件</h3>
                        <pre><code>import java.io.File;
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
}</code></pre>
                    `
                },
                {
                    title: "写入文件",
                    content: `
                        <h3>写入文件</h3>
                        <pre><code>import java.io.FileWriter;
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
}</code></pre>
                    `
                },
                {
                    title: "try-with-resources",
                    content: `
                        <h3>try-with-resources(自动关闭资源)</h3>
                        <pre><code>import java.io.*;

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
        // reader 会自动关闭,无需手动调用 close()
    }
}</code></pre>
                    `
                }
            ],
            quiz: [
                {
                    question: "BufferedReader 的主要作用是什么?",
                    options: [
                        "提高读取效率",
                        "写入文件",
                        "删除文件",
                        "创建文件"
                    ],
                    correct: 0
                },
                {
                    question: "try-with-resources 的优点是什么?",
                    options: [
                        "运行速度更快",
                        "自动关闭资源",
                        "不会抛出异常",
                        "可以处理所有类型"
                    ],
                    correct: 1
                },
                {
                    question: "以下哪个类用于写入文件?",
                    options: [
                        "FileReader",
                        "BufferedReader",
                        "FileWriter",
                        "File"
                    ],
                    correct: 2
                }
            ],
            codingProblems: [
                {
                    title: "编程练习1: 文件读取",
                    description: "使用 BufferedReader 读取文件（模拟）",
                    template: `import java.io.*;

public class FileReadTest {
    public static void main(String[] args) {
        // 模拟文件内容
        String content = "Hello\\nWorld\\nJava";

        // 使用 try-catch 包裹
        // 使用 BufferedReader 和 StringReader 读取内容
        // 输出每一行

        try {
            BufferedReader reader = new BufferedReader(new StringReader(content));
            String line;
            // 使用 while 循环读取每一行并输出

            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Hello\nWorld\nJava",
                            description: "正确读取文件内容"
                        }
                    ],
                    hints: [
                        "使用 reader.readLine() 读取一行",
                        "readLine() 返回 null 时表示结束",
                        "使用 while ((line = reader.readLine()) != null)"
                    ],
                    validator: function(code) {
                        if (!code.includes('BufferedReader')) {
                            return { passed: false, message: '请使用 BufferedReader' };
                        }

                        if (!code.includes('readLine()')) {
                            return { passed: false, message: '请使用 readLine() 方法读取内容' };
                        }

                        if (!code.includes('while')) {
                            return { passed: false, message: '请使用 while 循环读取所有行' };
                        }

                        return { passed: true, message: '✓ 测试通过！文件读取正确' };
                    }
                }
            ]
        },
        {
            id: 8,
            name: "多线程基础",
            icon: "⚡",
            locked: true,
            sections: [
                {
                    title: "创建线程",
                    content: `
                        <h3>方法1: 继承 Thread 类</h3>
                        <pre><code>public class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}

// 使用
MyThread t1 = new MyThread();
t1.start(); // 启动线程</code></pre>

                        <h3>方法2: 实现 Runnable 接口</h3>
                        <pre><code>public class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}

// 使用
Thread t2 = new Thread(new MyRunnable());
t2.start();</code></pre>

                        <h3>方法3: Lambda 表达式(Java 8+)</h3>
                        <pre><code>Thread t3 = new Thread(() -> {
    for (int i = 0; i < 5; i++) {
        System.out.println(Thread.currentThread().getName() + ": " + i);
    }
});
t3.start();</code></pre>
                    `
                },
                {
                    title: "线程同步",
                    content: `
                        <h3>synchronized 关键字</h3>
                        <pre><code>public class Counter {
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

System.out.println("Count: " + counter.getCount()); // 2000</code></pre>
                    `
                }
            ],
            quiz: [
                {
                    question: "创建线程有几种常用方法?",
                    options: ["1种", "2种", "3种", "4种"],
                    correct: 2
                },
                {
                    question: "启动线程使用哪个方法?",
                    options: ["run()", "start()", "init()", "begin()"],
                    correct: 1
                },
                {
                    question: "synchronized 关键字的作用是什么?",
                    options: [
                        "提高运行速度",
                        "线程同步,避免竞态条件",
                        "创建新线程",
                        "停止线程"
                    ],
                    correct: 1
                }
            ],
            codingProblems: [
                {
                    title: "编程练习1: 线程创建",
                    description: "创建并启动一个线程，输出5次信息",
                    template: `class MyThread extends Thread {
    public void run() {
        // 使用循环输出5次 "Thread running: " + i

    }
}

public class ThreadTest {
    public static void main(String[] args) {
        // 创建并启动线程

    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "Thread running: 0\nThread running: 1\nThread running: 2\nThread running: 3\nThread running: 4",
                            description: "正确创建和启动线程"
                        }
                    ],
                    hints: [
                        "在 run() 方法中使用 for 循环",
                        "使用 new MyThread().start() 启动线程",
                        "注意是 start() 不是 run()"
                    ],
                    validator: function(code) {
                        if (!code.match(/class\s+MyThread\s+extends\s+Thread/)) {
                            return { passed: false, message: '请让 MyThread 继承 Thread 类' };
                        }

                        if (!code.includes('public void run()')) {
                            return { passed: false, message: '请重写 run() 方法' };
                        }

                        if (!code.includes('.start()')) {
                            return { passed: false, message: '请使用 start() 方法启动线程' };
                        }

                        return { passed: true, message: '✓ 测试通过！线程创建和启动正确' };
                    }
                }
            ]
        },
        {
            id: 9,
            name: "学习建议与资源",
            icon: "🎓",
            locked: true,
            sections: [
                {
                    title: "学习路径",
                    content: `
                        <h3>学习路径</h3>
                        <ol>
                            <li><strong>基础语法</strong>(1-2周): 数据类型、控制流、数组</li>
                            <li><strong>面向对象</strong>(2-3周): 类、继承、多态、接口</li>
                            <li><strong>常用类与API</strong>(1周): String、集合框架、日期时间</li>
                            <li><strong>异常处理与IO</strong>(1周)</li>
                            <li><strong>进阶主题</strong>: 多线程、网络编程、数据库操作(JDBC)</li>
                        </ol>
                    `
                },
                {
                    title: "练习建议",
                    content: `
                        <h3>练习建议</h3>
                        <ul>
                            <li><strong>每天敲代码</strong>: 看懂≠会写,动手是关键</li>
                            <li><strong>做小项目</strong>: 学生管理系统、记事本、计算器</li>
                            <li><strong>刷题</strong>: LeetCode、牛客网</li>
                            <li><strong>看源码</strong>: ArrayList、HashMap 等</li>
                        </ul>
                    `
                },
                {
                    title: "推荐资源",
                    content: `
                        <h3>书籍</h3>
                        <ul>
                            <li>《Java核心技术 卷I》(Core Java)</li>
                            <li>《Head First Java》(生动有趣,适合入门)</li>
                            <li>《Effective Java》(进阶必读)</li>
                        </ul>

                        <h3>在线资源</h3>
                        <ul>
                            <li><a href="https://docs.oracle.com/javase/tutorial/" target="_blank">Oracle 官方文档</a></li>
                            <li><a href="https://www.runoob.com/java/java-tutorial.html" target="_blank">菜鸟教程</a></li>
                            <li><a href="https://leetcode.cn/" target="_blank">LeetCode</a></li>
                        </ul>

                        <h3>IDE 推荐</h3>
                        <ul>
                            <li><strong>IntelliJ IDEA</strong>(功能强大,推荐)</li>
                            <li><strong>Eclipse</strong>(免费,轻量)</li>
                            <li><strong>VS Code + Java 插件</strong></li>
                        </ul>
                    `
                },
                {
                    title: "与 C/C++ 的对比",
                    content: `
                        <h3>与 C/C++ 的对比总结</h3>
                        <table>
                            <tr>
                                <th>特性</th>
                                <th>C/C++</th>
                                <th>Java</th>
                            </tr>
                            <tr>
                                <td>内存管理</td>
                                <td>手动(malloc/free, new/delete)</td>
                                <td>自动(垃圾回收)</td>
                            </tr>
                            <tr>
                                <td>指针</td>
                                <td>有</td>
                                <td>无(用引用)</td>
                            </tr>
                            <tr>
                                <td>多继承</td>
                                <td>支持</td>
                                <td>不支持(用接口)</td>
                            </tr>
                            <tr>
                                <td>跨平台</td>
                                <td>需要重新编译</td>
                                <td>一次编译,到处运行</td>
                            </tr>
                            <tr>
                                <td>性能</td>
                                <td>更快</td>
                                <td>稍慢(但已很快)</td>
                            </tr>
                            <tr>
                                <td>编译</td>
                                <td>编译成机器码</td>
                                <td>编译成字节码</td>
                            </tr>
                        </table>

                        <div class="key-point">
                            <h4>🎉 恭喜你完成了所有章节!</h4>
                            <p>继续保持学习的热情,多写代码,多做项目。祝你在 Java 的学习道路上越走越远!</p>
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "以下哪本书最适合 Java 初学者?",
                    options: [
                        "《Effective Java》",
                        "《Head First Java》",
                        "《Java并发编程实战》",
                        "《深入理解Java虚拟机》"
                    ],
                    correct: 1
                },
                {
                    question: "Java 和 C++ 在内存管理上的主要区别是什么?",
                    options: [
                        "Java 需要手动管理,C++ 自动管理",
                        "Java 自动管理,C++ 需要手动管理",
                        "两者都需要手动管理",
                        "两者都是自动管理"
                    ],
                    correct: 1
                },
                {
                    question: "学习 Java 最重要的是什么?",
                    options: [
                        "只看书不写代码",
                        "多写代码,多实践",
                        "背诵所有 API",
                        "只做题不看书"
                    ],
                    correct: 1
                }
            ],
            codingProblems: [
                {
                    title: "综合练习: 学生管理系统",
                    description: "创建一个简单的学生信息管理程序，综合运用前面学到的知识",
                    template: `import java.util.ArrayList;

class Student {
    private String name;
    private int age;
    private double score;

    // 创建构造方法

    // 创建 toString() 方法，返回格式: "Student{name='张三', age=18, score=85.5}"

}

public class StudentManager {
    public static void main(String[] args) {
        // 创建 ArrayList 存储学生
        ArrayList<Student> students = new ArrayList<>();

        // 添加三个学生对象

        // 输出所有学生信息
        System.out.println("All students:");
        for (Student s : students) {
            System.out.println(s);
        }
    }
}`,
                    testCases: [
                        {
                            input: "",
                            expectedOutput: "All students:\nStudent{name='Tom', age=20, score=85.5}\nStudent{name='Jerry', age=19, score=90.0}\nStudent{name='Mary', age=21, score=88.0}",
                            description: "正确实现学生管理系统"
                        }
                    ],
                    hints: [
                        "在 Student 类中使用 private 成员变量",
                        "构造方法接受三个参数并赋值",
                        "toString() 方法返回格式化的字符串",
                        "使用 ArrayList 的 add() 方法添加学生"
                    ],
                    validator: function(code) {
                        if (!code.match(/class\s+Student/)) {
                            return { passed: false, message: '请定义 Student 类' };
                        }

                        if (!code.match(/private\s+String\s+name/)) {
                            return { passed: false, message: '请在 Student 中声明 private String name' };
                        }

                        if (!code.match(/private\s+int\s+age/)) {
                            return { passed: false, message: '请在 Student 中声明 private int age' };
                        }

                        if (!code.match(/private\s+double\s+score/)) {
                            return { passed: false, message: '请在 Student 中声明 private double score' };
                        }

                        if (!code.includes('public String toString()')) {
                            return { passed: false, message: '请实现 toString() 方法' };
                        }

                        if (!code.includes('ArrayList')) {
                            return { passed: false, message: '请使用 ArrayList 存储学生' };
                        }

                        return { passed: true, message: '✓ 测试通过！综合练习完成正确' };
                    }
                }
            ]
        }
    ]
};
