// 为各章节补充的编程练习
// 使用方法：将对应章节的 codingProblems 数组添加到 data.js 中

const chapter2CodingProblems = [
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
];

const chapter3CodingProblems = [
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
];

const chapter4CodingProblems = [
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
];

const chapter5CodingProblems = [
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
];

const chapter6CodingProblems = [
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
];

const chapter7CodingProblems = [
    {
        title: "编程练习1: Lambda 表达式",
        description: "使用 Lambda 表达式对列表进行操作",
        template: `import java.util.Arrays;
import java.util.List;

public class LambdaTest {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        // 使用 forEach 和 Lambda 表达式输出每个数字
        // 格式: 每个数字单独一行

    }
}`,
        testCases: [
            {
                input: "",
                expectedOutput: "1\n2\n3\n4\n5",
                description: "正确使用 Lambda 表达式"
            }
        ],
        hints: [
            "使用 numbers.forEach()",
            "Lambda 表达式格式: n -> System.out.println(n)",
            "或使用方法引用: System.out::println"
        ],
        validator: function(code) {
            if (!code.includes('forEach')) {
                return { passed: false, message: '请使用 forEach 方法' };
            }

            const hasLambda = code.includes('->') || code.includes('::');
            if (!hasLambda) {
                return { passed: false, message: '请使用 Lambda 表达式或方法引用' };
            }

            return { passed: true, message: '✓ 测试通过！Lambda 表达式使用正确' };
        }
    }
];

const chapter8CodingProblems = [
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
];

const chapter9CodingProblems = [
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
];

// 导出所有练习
const allCodingProblems = {
    chapter2: chapter2CodingProblems,
    chapter3: chapter3CodingProblems,
    chapter4: chapter4CodingProblems,
    chapter5: chapter5CodingProblems,
    chapter6: chapter6CodingProblems,
    chapter7: chapter7CodingProblems,
    chapter8: chapter8CodingProblems,
    chapter9: chapter9CodingProblems
};
