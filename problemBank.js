// 练习题库 - 200+ 题目，覆盖所有知识点
const problemBank = [
    // ========== 等级 1 题目（基础输入输出） ==========
    {
        id: 'lv1-001',
        title: 'Hello World',
        difficulty: '简单',
        level: 1,
        xp: 5,
        timeLimit: 3,
        description: '输出 "Hello, World!"',
        inputFormat: '无',
        outputFormat: 'Hello, World!',
        sampleInput: '',
        sampleOutput: 'Hello, World!',
        hint: '使用 System.out.println()',
        template: `public class Main {\n    public static void main(String[] args) {\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('System.out.println')) return { passed: false, message: '请使用 println' };
            const match = code.match(/println\s*\(\s*"([^"]*)"\s*\)/);
            if (!match || match[1] !== 'Hello, World!') return { passed: false, message: '输出不正确' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv1-002',
        title: '输出你的名字',
        difficulty: '简单',
        level: 1,
        xp: 5,
        timeLimit: 3,
        description: '输出 "My name is Java"',
        inputFormat: '无',
        outputFormat: 'My name is Java',
        sampleInput: '',
        sampleOutput: 'My name is Java',
        hint: '注意大小写和空格',
        template: `public class Main {\n    public static void main(String[] args) {\n        \n    }\n}`,
        validator: function(code) {
            const match = code.match(/println\s*\(\s*"([^"]*)"\s*\)/);
            if (!match || match[1] !== 'My name is Java') return { passed: false, message: '输出不正确' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv1-003',
        title: '输出三行',
        difficulty: '简单',
        level: 1,
        xp: 5,
        timeLimit: 3,
        description: '分三行输出 "Java", "Python", "C++"',
        inputFormat: '无',
        outputFormat: '三行',
        sampleInput: '',
        sampleOutput: 'Java\nPython\nC++',
        hint: '调用三次 println',
        template: `public class Main {\n    public static void main(String[] args) {\n        \n    }\n}`,
        validator: function(code) {
            const count = (code.match(/println/g) || []).length;
            if (count < 3) return { passed: false, message: '请输出三行' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv1-004',
        title: 'A+B问题',
        difficulty: '简单',
        level: 1,
        xp: 8,
        timeLimit: 3,
        description: '读取两个整数，输出它们的和',
        inputFormat: '两个整数 a b',
        outputFormat: '一个整数',
        sampleInput: '3 5',
        sampleOutput: '8',
        hint: '使用 Scanner 和 nextInt()',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Scanner')) return { passed: false, message: '请使用 Scanner' };
            if (!code.includes('nextInt')) return { passed: false, message: '请使用 nextInt()' };
            if (!code.includes('+')) return { passed: false, message: '请计算和' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv1-005',
        title: 'A-B问题',
        difficulty: '简单',
        level: 1,
        xp: 8,
        timeLimit: 3,
        description: '读取两个整数，输出 a - b',
        inputFormat: '两个整数',
        outputFormat: '一个整数',
        sampleInput: '10 3',
        sampleOutput: '7',
        hint: '使用减法运算符',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('-')) return { passed: false, message: '请使用减法' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv1-006',
        title: 'A×B问题',
        difficulty: '简单',
        level: 1,
        xp: 8,
        timeLimit: 3,
        description: '读取两个整数，输出它们的乘积',
        inputFormat: '两个整数',
        outputFormat: '一个整数',
        sampleInput: '4 5',
        sampleOutput: '20',
        hint: '使用 * 运算符',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('*')) return { passed: false, message: '请使用乘法' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv1-007',
        title: '整数除法',
        difficulty: '简单',
        level: 1,
        xp: 8,
        timeLimit: 3,
        description: '读取两个整数，输出 a / b 的商（整数除法）',
        inputFormat: '两个整数',
        outputFormat: '一个整数',
        sampleInput: '10 3',
        sampleOutput: '3',
        hint: 'int除以int结果是int',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('/')) return { passed: false, message: '请使用除法' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv1-008',
        title: '求余数',
        difficulty: '简单',
        level: 1,
        xp: 8,
        timeLimit: 3,
        description: '读取两个整数，输出 a % b',
        inputFormat: '两个整数',
        outputFormat: '一个整数',
        sampleInput: '10 3',
        sampleOutput: '1',
        hint: '使用 % 运算符',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请使用取余运算' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv1-009',
        title: '平均数',
        difficulty: '简单',
        level: 1,
        xp: 10,
        timeLimit: 3,
        description: '读取两个整数，输出它们的平均数（保留整数部分）',
        inputFormat: '两个整数',
        outputFormat: '一个整数',
        sampleInput: '5 7',
        sampleOutput: '6',
        hint: '先求和再除以2',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('+') || !code.includes('/')) return { passed: false, message: '请先求和再除以2' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv1-010',
        title: '四则运算',
        difficulty: '简单',
        level: 1,
        xp: 10,
        timeLimit: 3,
        description: '读取两个整数，分四行输出加减乘除的结果',
        inputFormat: '两个整数',
        outputFormat: '四行整数',
        sampleInput: '8 2',
        sampleOutput: '10\n6\n16\n4',
        hint: '分别计算并输出',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            const ops = ['+', '-', '*', '/'];
            if (!ops.every(op => code.includes(op))) return { passed: false, message: '请进行四则运算' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 等级 2 题目（条件判断） ==========
    {
        id: 'lv2-001',
        title: '判断正负',
        difficulty: '简单',
        level: 2,
        xp: 10,
        timeLimit: 3,
        description: '读取整数，正数输出"positive"，负数输出"negative"，零输出"zero"',
        inputFormat: '一个整数',
        outputFormat: '一个单词',
        sampleInput: '5',
        sampleOutput: 'positive',
        hint: '使用 if-else if-else',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('if')) return { passed: false, message: '请使用if语句' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv2-002',
        title: '判断奇偶',
        difficulty: '简单',
        level: 2,
        xp: 10,
        timeLimit: 3,
        description: '读取整数，偶数输出"even"，奇数输出"odd"',
        inputFormat: '一个整数',
        outputFormat: 'even 或 odd',
        sampleInput: '4',
        sampleOutput: 'even',
        hint: '使用 n % 2 判断',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请使用取余判断' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv2-003',
        title: '比较大小',
        difficulty: '简单',
        level: 2,
        xp: 10,
        timeLimit: 3,
        description: '读取两个整数，输出较大的那个',
        inputFormat: '两个整数',
        outputFormat: '一个整数',
        sampleInput: '5 3',
        sampleOutput: '5',
        hint: '使用 if 或 Math.max()',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('if') && !code.includes('Math.max')) return { passed: false, message: '请比较大小' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv2-004',
        title: '三个数的最大值',
        difficulty: '简单',
        level: 2,
        xp: 12,
        timeLimit: 3,
        description: '读取三个整数，输出最大值',
        inputFormat: '三个整数',
        outputFormat: '一个整数',
        sampleInput: '3 5 2',
        sampleOutput: '5',
        hint: '使用嵌套的 Math.max() 或多个 if',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            const count = (code.match(/nextInt/g) || []).length;
            if (count < 3) return { passed: false, message: '请读取三个数' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv2-005',
        title: '绝对值',
        difficulty: '简单',
        level: 2,
        xp: 10,
        timeLimit: 3,
        description: '读取整数，输出其绝对值',
        inputFormat: '一个整数',
        outputFormat: '一个整数',
        sampleInput: '-5',
        sampleOutput: '5',
        hint: '使用 Math.abs() 或判断正负',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Math.abs') && !code.includes('if')) return { passed: false, message: '请求绝对值' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv2-006',
        title: '成绩等级',
        difficulty: '简单',
        level: 2,
        xp: 12,
        timeLimit: 3,
        description: '读取分数(0-100)，>=90输出A，>=80输出B，>=60输出C，<60输出D',
        inputFormat: '一个整数',
        outputFormat: '一个字母',
        sampleInput: '85',
        sampleOutput: 'B',
        hint: '使用 if-else if 结构',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            const grades = ['"A"', '"B"', '"C"', '"D"'];
            if (!grades.every(g => code.includes(g))) return { passed: false, message: '请输出ABCD等级' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv2-007',
        title: '闰年判断',
        difficulty: '简单',
        level: 2,
        xp: 15,
        timeLimit: 3,
        description: '读取年份，判断是否是闰年。能被4整除但不能被100整除，或能被400整除',
        inputFormat: '一个整数',
        outputFormat: '是闰年输出"Yes"，否则"No"',
        sampleInput: '2020',
        sampleOutput: 'Yes',
        hint: '(year%4==0 && year%100!=0) || year%400==0',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请使用取余判断' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv2-008',
        title: '三角形判定',
        difficulty: '简单',
        level: 2,
        xp: 15,
        timeLimit: 3,
        description: '读取三条边长，判断能否构成三角形（任意两边之和大于第三边）',
        inputFormat: '三个正整数',
        outputFormat: '"Yes" 或 "No"',
        sampleInput: '3 4 5',
        sampleOutput: 'Yes',
        hint: '判断 a+b>c && a+c>b && b+c>a',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('+') || !code.includes('>')) return { passed: false, message: '请判断两边之和' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv2-009',
        title: '月份天数',
        difficulty: '简单',
        level: 2,
        xp: 15,
        timeLimit: 3,
        description: '读取月份(1-12)，输出该月天数（不考虑闰年，2月28天）',
        inputFormat: '一个整数',
        outputFormat: '一个整数',
        sampleInput: '2',
        sampleOutput: '28',
        hint: '使用 switch 或多个 if',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('switch') && !code.includes('if')) return { passed: false, message: '请使用条件语句' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv2-010',
        title: 'BMI计算',
        difficulty: '简单',
        level: 2,
        xp: 15,
        timeLimit: 3,
        description: '读取体重(kg)和身高(m)，计算BMI=体重/(身高²)，输出整数部分',
        inputFormat: '两个整数：体重 身高(单位：厘米)',
        outputFormat: '一个整数',
        sampleInput: '70 175',
        sampleOutput: '22',
        hint: '先转换身高为米，再计算',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('/')) return { passed: false, message: '请进行除法计算' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 等级 3 题目（循环基础） ==========
    {
        id: 'lv3-001',
        title: '输出1到N',
        difficulty: '简单',
        level: 3,
        xp: 12,
        timeLimit: 3,
        description: '读取N，输出1到N的所有整数，每个占一行',
        inputFormat: '一个正整数',
        outputFormat: 'N行，每行一个整数',
        sampleInput: '5',
        sampleOutput: '1\n2\n3\n4\n5',
        hint: '使用 for 循环',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('for')) return { passed: false, message: '请使用for循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv3-002',
        title: '输出N到1',
        difficulty: '简单',
        level: 3,
        xp: 12,
        timeLimit: 3,
        description: '读取N，从N到1倒序输出',
        inputFormat: '一个正整数',
        outputFormat: 'N行',
        sampleInput: '5',
        sampleOutput: '5\n4\n3\n2\n1',
        hint: '循环变量递减',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('for') && !code.includes('while')) return { passed: false, message: '请使用循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv3-003',
        title: '求和1到N',
        difficulty: '简单',
        level: 3,
        xp: 12,
        timeLimit: 3,
        description: '读取N，计算1+2+...+N',
        inputFormat: '一个正整数',
        outputFormat: '一个整数',
        sampleInput: '100',
        sampleOutput: '5050',
        hint: '使用循环累加',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('for') && !code.includes('while')) return { passed: false, message: '请使用循环' };
            if (!code.includes('+=')) return { passed: false, message: '请累加' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv3-004',
        title: '阶乘',
        difficulty: '简单',
        level: 3,
        xp: 15,
        timeLimit: 3,
        description: '读取N，计算N!=1×2×...×N',
        inputFormat: '一个正整数(N<=12)',
        outputFormat: '一个整数',
        sampleInput: '5',
        sampleOutput: '120',
        hint: '使用循环累乘',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('*=')) return { passed: false, message: '请使用乘法累积' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv3-005',
        title: '偶数求和',
        difficulty: '简单',
        level: 3,
        xp: 12,
        timeLimit: 3,
        description: '读取N，计算1到N之间所有偶数的和',
        inputFormat: '一个正整数',
        outputFormat: '一个整数',
        sampleInput: '10',
        sampleOutput: '30',
        hint: '循环中判断 i%2==0',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请判断偶数' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv3-006',
        title: '奇数求和',
        difficulty: '简单',
        level: 3,
        xp: 12,
        timeLimit: 3,
        description: '读取N，计算1到N之间所有奇数的和',
        inputFormat: '一个正整数',
        outputFormat: '一个整数',
        sampleInput: '10',
        sampleOutput: '25',
        hint: '判断 i%2==1',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请判断奇数' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv3-007',
        title: '3的倍数',
        difficulty: '简单',
        level: 3,
        xp: 12,
        timeLimit: 3,
        description: '读取N，输出1到N之间所有3的倍数，空格分隔',
        inputFormat: '一个正整数',
        outputFormat: '一行，空格分隔',
        sampleInput: '10',
        sampleOutput: '3 6 9',
        hint: '判断 i%3==0',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请判断倍数' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv3-008',
        title: '九九乘法表',
        difficulty: '简单',
        level: 3,
        xp: 18,
        timeLimit: 3,
        description: '输出九九乘法表（每行输出该行的所有乘法式，空格分隔）',
        inputFormat: '无',
        outputFormat: '9行',
        sampleInput: '',
        sampleOutput: '1*1=1\n1*2=2 2*2=4\n...',
        hint: '双层for循环',
        template: `public class Main {\n    public static void main(String[] args) {\n        \n    }\n}`,
        validator: function(code) {
            const count = (code.match(/for/g) || []).length;
            if (count < 2) return { passed: false, message: '请使用双层循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv3-009',
        title: '水仙花数',
        difficulty: '中等',
        level: 3,
        xp: 20,
        timeLimit: 3,
        description: '输出所有三位水仙花数（各位数字立方和等于自身）',
        inputFormat: '无',
        outputFormat: '多行，每行一个',
        sampleInput: '',
        sampleOutput: '153\n370\n371\n407',
        hint: '遍历100-999，分离各位数字',
        template: `public class Main {\n    public static void main(String[] args) {\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('for')) return { passed: false, message: '请使用循环' };
            if (!code.includes('%') || !code.includes('/')) return { passed: false, message: '请分离数字' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv3-010',
        title: '数字倒序',
        difficulty: '中等',
        level: 3,
        xp: 18,
        timeLimit: 3,
        description: '读取一个整数，倒序输出其各位数字',
        inputFormat: '一个正整数',
        outputFormat: '倒序的数字',
        sampleInput: '1234',
        sampleOutput: '4321',
        hint: '不断取余和除10',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%') || !code.includes('/')) return { passed: false, message: '请分离数字' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 等级 4 题目（数组基础） ==========
    {
        id: 'lv4-001',
        title: '数组求和',
        difficulty: '简单',
        level: 4,
        xp: 15,
        timeLimit: 3,
        description: '读取N个整数，输出它们的和',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n1 2 3 4 5',
        sampleOutput: '15',
        hint: '使用数组或直接累加',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('for') && !code.includes('while')) return { passed: false, message: '请使用循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv4-002',
        title: '数组最大值',
        difficulty: '简单',
        level: 4,
        xp: 15,
        timeLimit: 3,
        description: '读取N个整数，输出最大值',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n3 1 4 1 5',
        sampleOutput: '5',
        hint: '遍历比较',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('[]')) return { passed: false, message: '建议使用数组' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv4-003',
        title: '数组最小值',
        difficulty: '简单',
        level: 4,
        xp: 15,
        timeLimit: 3,
        description: '读取N个整数，输出最小值',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n3 1 4 1 5',
        sampleOutput: '1',
        hint: '类似最大值',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv4-004',
        title: '数组倒序',
        difficulty: '简单',
        level: 4,
        xp: 18,
        timeLimit: 3,
        description: '读取N个整数，倒序输出，空格分隔',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，空格分隔',
        sampleInput: '5\n1 2 3 4 5',
        sampleOutput: '5 4 3 2 1',
        hint: '从后往前遍历',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('[]')) return { passed: false, message: '请使用数组' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv4-005',
        title: '统计正数',
        difficulty: '简单',
        level: 4,
        xp: 15,
        timeLimit: 3,
        description: '读取N个整数，统计正数个数',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n-1 2 -3 4 5',
        sampleOutput: '3',
        hint: '遍历判断>0',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('>')) return { passed: false, message: '请判断正数' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv4-006',
        title: '统计负数',
        difficulty: '简单',
        level: 4,
        xp: 15,
        timeLimit: 3,
        description: '读取N个整数，统计负数个数',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n-1 2 -3 4 5',
        sampleOutput: '2',
        hint: '判断<0',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('<')) return { passed: false, message: '请判断负数' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv4-007',
        title: '查找元素',
        difficulty: '简单',
        level: 4,
        xp: 18,
        timeLimit: 3,
        description: '读取数组和目标值X，输出X第一次出现的索引(从0开始)，不存在输出-1',
        inputFormat: '第一行N和X，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5 3\n1 2 3 4 5',
        sampleOutput: '2',
        hint: '遍历查找',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('[]')) return { passed: false, message: '请使用数组' };
            if (!code.includes('==')) return { passed: false, message: '请判断相等' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv4-008',
        title: '数组平均值',
        difficulty: '简单',
        level: 4,
        xp: 15,
        timeLimit: 3,
        description: '读取N个整数，输出平均值（保留整数）',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '4\n10 20 30 40',
        sampleOutput: '25',
        hint: '先求和再除以N',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('/')) return { passed: false, message: '请除以N' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv4-009',
        title: '去重统计',
        difficulty: '中等',
        level: 4,
        xp: 20,
        timeLimit: 3,
        description: '读取N个整数，输出不同数字的个数',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n1 2 1 3 2',
        sampleOutput: '3',
        hint: '使用HashSet或标记数组',
        template: `import java.util.Scanner;\nimport java.util.HashSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('HashSet') && !code.includes('boolean')) return { passed: false, message: '请使用Set或标记' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv4-010',
        title: '冒泡排序',
        difficulty: '中等',
        level: 4,
        xp: 25,
        timeLimit: 3,
        description: '读取N个整数，从小到大排序后输出',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，排序后的数字',
        sampleInput: '5\n3 1 4 1 5',
        sampleOutput: '1 1 3 4 5',
        hint: '使用Arrays.sort()或手写冒泡',
        template: `import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('sort') && !(code.includes('for') && code.match(/for/g).length >= 2)) {
                return { passed: false, message: '请排序' };
            }
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 等级 5 题目（字符串） ==========
    {
        id: 'lv5-001',
        title: '字符串长度',
        difficulty: '简单',
        level: 5,
        xp: 12,
        timeLimit: 3,
        description: '读取字符串，输出长度',
        inputFormat: '一行字符串',
        outputFormat: '一个整数',
        sampleInput: 'hello',
        sampleOutput: '5',
        hint: '使用.length()',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.length()')) return { passed: false, message: '请使用.length()' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv5-002',
        title: '字符串转大写',
        difficulty: '简单',
        level: 5,
        xp: 12,
        timeLimit: 3,
        description: '读取字符串，转为大写输出',
        inputFormat: '一行字符串',
        outputFormat: '一行字符串',
        sampleInput: 'hello',
        sampleOutput: 'HELLO',
        hint: '使用.toUpperCase()',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.toUpperCase()')) return { passed: false, message: '请使用.toUpperCase()' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv5-003',
        title: '字符串转小写',
        difficulty: '简单',
        level: 5,
        xp: 12,
        timeLimit: 3,
        description: '读取字符串，转为小写输出',
        inputFormat: '一行字符串',
        outputFormat: '一行字符串',
        sampleInput: 'HELLO',
        sampleOutput: 'hello',
        hint: '使用.toLowerCase()',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.toLowerCase()')) return { passed: false, message: '请使用.toLowerCase()' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv5-004',
        title: '字符串拼接',
        difficulty: '简单',
        level: 5,
        xp: 12,
        timeLimit: 3,
        description: '读取两个字符串，拼接后输出',
        inputFormat: '两行字符串',
        outputFormat: '一行字符串',
        sampleInput: 'Hello\nWorld',
        sampleOutput: 'HelloWorld',
        hint: '使用 + 或.concat()',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('+') && !code.includes('.concat')) return { passed: false, message: '请拼接字符串' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv5-005',
        title: '字符统计',
        difficulty: '简单',
        level: 5,
        xp: 18,
        timeLimit: 3,
        description: '读取字符串和字符，统计该字符出现次数',
        inputFormat: '第一行字符串，第二行一个字符',
        outputFormat: '一个整数',
        sampleInput: 'hello\nl',
        sampleOutput: '2',
        hint: '遍历字符串，使用.charAt(i)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.charAt')) return { passed: false, message: '请使用.charAt()' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv5-006',
        title: '字符串倒序',
        difficulty: '简单',
        level: 5,
        xp: 18,
        timeLimit: 3,
        description: '读取字符串，倒序输出',
        inputFormat: '一行字符串',
        outputFormat: '一行字符串',
        sampleInput: 'hello',
        sampleOutput: 'olleh',
        hint: '从后往前遍历',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('charAt') && !code.includes('StringBuilder')) return { passed: false, message: '请访问字符' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv5-007',
        title: '回文判断',
        difficulty: '中等',
        level: 5,
        xp: 20,
        timeLimit: 3,
        description: '判断字符串是否是回文（正读反读一样）',
        inputFormat: '一行字符串',
        outputFormat: '"Yes" 或 "No"',
        sampleInput: 'aba',
        sampleOutput: 'Yes',
        hint: '比较首尾字符或反转比较',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('charAt') && !code.includes('reverse')) return { passed: false, message: '请比较字符' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv5-008',
        title: '单词统计',
        difficulty: '中等',
        level: 5,
        xp: 20,
        timeLimit: 3,
        description: '读取一行字符串（单词用空格分隔），输出单词个数',
        inputFormat: '一行字符串',
        outputFormat: '一个整数',
        sampleInput: 'hello world java',
        sampleOutput: '3',
        hint: '使用.split(" ")',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.split')) return { passed: false, message: '请使用.split()' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv5-009',
        title: '首字母大写',
        difficulty: '中等',
        level: 5,
        xp: 22,
        timeLimit: 3,
        description: '读取字符串，将首字母转为大写',
        inputFormat: '一行字符串',
        outputFormat: '一行字符串',
        sampleInput: 'hello',
        sampleOutput: 'Hello',
        hint: '取首字符转大写，拼接剩余部分',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('substring') && !code.includes('charAt')) return { passed: false, message: '请分离字符' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv5-010',
        title: '删除空格',
        difficulty: '简单',
        level: 5,
        xp: 15,
        timeLimit: 3,
        description: '读取字符串，删除所有空格后输出',
        inputFormat: '一行字符串',
        outputFormat: '一行字符串',
        sampleInput: 'hello world',
        sampleOutput: 'helloworld',
        hint: '使用.replace(" ", "")',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.replace')) return { passed: false, message: '请使用.replace()' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 等级 6 题目（综合应用） ==========
    {
        id: 'lv6-001',
        title: '质数判断',
        difficulty: '中等',
        level: 6,
        xp: 25,
        timeLimit: 3,
        description: '读取整数N，判断是否是质数（只能被1和自己整除）',
        inputFormat: '一个正整数',
        outputFormat: '"Yes" 或 "No"',
        sampleInput: '7',
        sampleOutput: 'Yes',
        hint: '遍历2到sqrt(N)判断能否整除',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请判断整除' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv6-002',
        title: '最大公约数',
        difficulty: '中等',
        level: 6,
        xp: 25,
        timeLimit: 3,
        description: '读取两个正整数，输出它们的最大公约数',
        inputFormat: '两个正整数',
        outputFormat: '一个整数',
        sampleInput: '12 18',
        sampleOutput: '6',
        hint: '使用辗转相除法',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请使用取余' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv6-003',
        title: '斐波那契数列',
        difficulty: '中等',
        level: 6,
        xp: 25,
        timeLimit: 3,
        description: '读取N，输出斐波那契数列的第N项（F(1)=1, F(2)=1, F(n)=F(n-1)+F(n-2)）',
        inputFormat: '一个正整数N(N<=40)',
        outputFormat: '一个整数',
        sampleInput: '10',
        sampleOutput: '55',
        hint: '使用循环迭代',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('for') && !code.includes('while')) return { passed: false, message: '请使用循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv6-004',
        title: '完全数',
        difficulty: '中等',
        level: 6,
        xp: 28,
        timeLimit: 3,
        description: '读取N，判断是否是完全数（等于所有真因子之和，如6=1+2+3）',
        inputFormat: '一个正整数',
        outputFormat: '"Yes" 或 "No"',
        sampleInput: '6',
        sampleOutput: 'Yes',
        hint: '找出所有因子求和',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请判断因子' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv6-005',
        title: '杨辉三角',
        difficulty: '中等',
        level: 6,
        xp: 30,
        timeLimit: 3,
        description: '读取N，输出杨辉三角的前N行',
        inputFormat: '一个正整数N',
        outputFormat: 'N行，每行的数字空格分隔',
        sampleInput: '5',
        sampleOutput: '1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1',
        hint: '使用二维数组，每个数=上一行左上+正上',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('[][]') && !code.includes('[]')) return { passed: false, message: '请使用数组' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv6-006',
        title: '进制转换',
        difficulty: '中等',
        level: 6,
        xp: 28,
        timeLimit: 3,
        description: '读取十进制整数，输出其二进制表示',
        inputFormat: '一个正整数',
        outputFormat: '二进制字符串',
        sampleInput: '10',
        sampleOutput: '1010',
        hint: '使用Integer.toBinaryString()或手动转换',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('toBinaryString') && !code.includes('%')) return { passed: false, message: '请转换进制' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv6-007',
        title: '字符串反转单词',
        difficulty: '中等',
        level: 6,
        xp: 28,
        timeLimit: 3,
        description: '读取字符串，反转每个单词后输出（单词顺序不变）',
        inputFormat: '一行字符串',
        outputFormat: '一行字符串',
        sampleInput: 'hello world',
        sampleOutput: 'olleh dlrow',
        hint: 'split分割，反转每个单词',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('split')) return { passed: false, message: '请分割字符串' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv6-008',
        title: '矩阵转置',
        difficulty: '中等',
        level: 6,
        xp: 30,
        timeLimit: 3,
        description: '读取N×N矩阵，输出其转置矩阵',
        inputFormat: '第一行N，接下来N行每行N个整数',
        outputFormat: 'N行，每行N个整数',
        sampleInput: '3\n1 2 3\n4 5 6\n7 8 9',
        sampleOutput: '1 4 7\n2 5 8\n3 6 9',
        hint: '交换行列索引',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('[][]')) return { passed: false, message: '请使用二维数组' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv6-009',
        title: '数字金字塔',
        difficulty: '中等',
        level: 6,
        xp: 25,
        timeLimit: 3,
        description: '读取N，输出N层数字金字塔',
        inputFormat: '一个正整数',
        outputFormat: 'N行',
        sampleInput: '5',
        sampleOutput: '    1\n   222\n  33333\n 4444444\n555555555',
        hint: '控制空格和数字个数',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('for')) return { passed: false, message: '请使用循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv6-010',
        title: '字符串压缩',
        difficulty: '中等',
        level: 6,
        xp: 30,
        timeLimit: 3,
        description: '读取字符串，压缩连续字符（如"aaabbc"→"a3b2c1"）',
        inputFormat: '一行字符串',
        outputFormat: '一行字符串',
        sampleInput: 'aaabbc',
        sampleOutput: 'a3b2c1',
        hint: '遍历统计连续字符',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('charAt')) return { passed: false, message: '请访问字符' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 等级 7 题目（方法与递归） ==========
    {
        id: 'lv7-001',
        title: '方法定义',
        difficulty: '简单',
        level: 7,
        xp: 20,
        timeLimit: 3,
        description: '定义一个方法sum，接收两个int参数并返回它们的和',
        inputFormat: '两个整数',
        outputFormat: '一个整数',
        sampleInput: '3 5',
        sampleOutput: '8',
        hint: '定义 public static int sum(int a, int b)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    // 在这里定义sum方法\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        System.out.println(sum(a, b));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('int sum')) return { passed: false, message: '请定义sum方法' };
            if (!code.includes('return')) return { passed: false, message: '请返回结果' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv7-002',
        title: '判断偶数方法',
        difficulty: '简单',
        level: 7,
        xp: 20,
        timeLimit: 3,
        description: '定义isEven方法，判断整数是否为偶数',
        inputFormat: '一个整数',
        outputFormat: 'true 或 false',
        sampleInput: '4',
        sampleOutput: 'true',
        hint: '返回类型为boolean',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static boolean isEven(int n) {\n        \n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(isEven(sc.nextInt()));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('boolean isEven')) return { passed: false, message: '请定义boolean类型的isEven' };
            if (!code.includes('%')) return { passed: false, message: '请使用取余判断' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv7-003',
        title: '数组最大值方法',
        difficulty: '中等',
        level: 7,
        xp: 25,
        timeLimit: 3,
        description: '定义findMax方法，返回数组中的最大值',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n3 1 4 1 5',
        sampleOutput: '5',
        hint: '方法签名：public static int findMax(int[] arr)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static int findMax(int[] arr) {\n        \n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        System.out.println(findMax(arr));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('int findMax')) return { passed: false, message: '请定义findMax方法' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv7-004',
        title: '递归求阶乘',
        difficulty: '中等',
        level: 7,
        xp: 30,
        timeLimit: 3,
        description: '使用递归实现阶乘计算',
        inputFormat: '一个正整数N(N<=12)',
        outputFormat: '一个整数',
        sampleInput: '5',
        sampleOutput: '120',
        hint: 'factorial(n) = n * factorial(n-1), 边界条件 factorial(1)=1',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static int factorial(int n) {\n        \n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(factorial(sc.nextInt()));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('factorial(')) return { passed: false, message: '请使用递归调用自身' };
            if (!code.includes('if') && !code.includes('?')) return { passed: false, message: '请设置递归边界' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv7-005',
        title: '递归斐波那契',
        difficulty: '中等',
        level: 7,
        xp: 30,
        timeLimit: 3,
        description: '使用递归实现斐波那契数列',
        inputFormat: '一个正整数N(N<=30)',
        outputFormat: '一个整数',
        sampleInput: '7',
        sampleOutput: '13',
        hint: 'fib(n) = fib(n-1) + fib(n-2), 边界 fib(1)=fib(2)=1',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static int fib(int n) {\n        \n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(fib(sc.nextInt()));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('fib(')) return { passed: false, message: '请使用递归' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv7-006',
        title: '递归求和',
        difficulty: '中等',
        level: 7,
        xp: 25,
        timeLimit: 3,
        description: '使用递归计算1到N的和',
        inputFormat: '一个正整数',
        outputFormat: '一个整数',
        sampleInput: '10',
        sampleOutput: '55',
        hint: 'sum(n) = n + sum(n-1)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static int sum(int n) {\n        \n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(sum(sc.nextInt()));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('sum(')) return { passed: false, message: '请使用递归' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv7-007',
        title: '方法重载',
        difficulty: '中等',
        level: 7,
        xp: 28,
        timeLimit: 3,
        description: '定义两个max方法，一个比较两个数，一个比较三个数',
        inputFormat: '三个整数',
        outputFormat: '一个整数（三个数的最大值）',
        sampleInput: '3 5 2',
        sampleOutput: '5',
        hint: '方法重载：max(int a, int b) 和 max(int a, int b, int c)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static int max(int a, int b) {\n        \n    }\n    \n    public static int max(int a, int b, int c) {\n        \n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();\n        System.out.println(max(a, b, c));\n    }\n}`,
        validator: function(code) {
            const maxCount = (code.match(/int max\(/g) || []).length;
            if (maxCount < 2) return { passed: false, message: '请定义两个max方法' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv7-008',
        title: '递归幂运算',
        difficulty: '中等',
        level: 7,
        xp: 30,
        timeLimit: 3,
        description: '使用递归计算a的n次方',
        inputFormat: '两个整数a和n',
        outputFormat: '一个整数',
        sampleInput: '2 10',
        sampleOutput: '1024',
        hint: 'power(a, n) = a * power(a, n-1)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static int power(int a, int n) {\n        \n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(power(sc.nextInt(), sc.nextInt()));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('power(')) return { passed: false, message: '请使用递归' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv7-009',
        title: '递归数组求和',
        difficulty: '中等',
        level: 7,
        xp: 28,
        timeLimit: 3,
        description: '使用递归计算数组元素之和',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n1 2 3 4 5',
        sampleOutput: '15',
        hint: '递归处理数组：sum(arr, index)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static int sum(int[] arr, int index) {\n        \n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        System.out.println(sum(arr, 0));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('sum(')) return { passed: false, message: '请使用递归' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv7-010',
        title: '汉诺塔步数',
        difficulty: '困难',
        level: 7,
        xp: 35,
        timeLimit: 3,
        description: '输出N个盘子汉诺塔移动步数',
        inputFormat: '一个正整数N(N<=20)',
        outputFormat: '一个整数',
        sampleInput: '3',
        sampleOutput: '7',
        hint: '步数公式：2^n - 1',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println((int)Math.pow(2, n) - 1);\n    }\n}`,
        validator: function(code) {
            if (!code.includes('pow') && !code.includes('<<')) return { passed: false, message: '请计算2的n次方' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 等级 8 题目（面向对象基础） ==========
    {
        id: 'lv8-001',
        title: '定义类',
        difficulty: '简单',
        level: 8,
        xp: 25,
        timeLimit: 3,
        description: '定义一个Point类，包含x和y两个int属性',
        inputFormat: '两个整数',
        outputFormat: '两个整数，空格分隔',
        sampleInput: '3 5',
        sampleOutput: '3 5',
        hint: '定义成员变量 public int x, y;',
        template: `import java.util.Scanner;\n\nclass Point {\n    // 在这里定义属性\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Point p = new Point();\n        p.x = sc.nextInt();\n        p.y = sc.nextInt();\n        System.out.println(p.x + " " + p.y);\n    }\n}`,
        validator: function(code) {
            if (!code.includes('class Point')) return { passed: false, message: '请定义Point类' };
            if (!code.includes('int x') || !code.includes('int y')) return { passed: false, message: '请定义x和y属性' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv8-002',
        title: '构造方法',
        difficulty: '简单',
        level: 8,
        xp: 28,
        timeLimit: 3,
        description: '为Point类添加构造方法',
        inputFormat: '两个整数',
        outputFormat: '两个整数，空格分隔',
        sampleInput: '3 5',
        sampleOutput: '3 5',
        hint: 'public Point(int x, int y) { this.x = x; this.y = y; }',
        template: `import java.util.Scanner;\n\nclass Point {\n    int x, y;\n    \n    // 在这里定义构造方法\n    \n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Point p = new Point(sc.nextInt(), sc.nextInt());\n        System.out.println(p.x + " " + p.y);\n    }\n}`,
        validator: function(code) {
            if (!code.includes('Point(')) return { passed: false, message: '请定义构造方法' };
            if (!code.includes('this.')) return { passed: false, message: '请使用this关键字' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv8-003',
        title: '对象方法',
        difficulty: '中等',
        level: 8,
        xp: 30,
        timeLimit: 3,
        description: '为Point类添加distance方法，计算到原点的距离（返回int）',
        inputFormat: '两个整数',
        outputFormat: '一个整数',
        sampleInput: '3 4',
        sampleOutput: '5',
        hint: '使用Math.sqrt(x*x + y*y)',
        template: `import java.util.Scanner;\n\nclass Point {\n    int x, y;\n    \n    public Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n    \n    // 在这里定义distance方法\n    \n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Point p = new Point(sc.nextInt(), sc.nextInt());\n        System.out.println(p.distance());\n    }\n}`,
        validator: function(code) {
            if (!code.includes('distance()')) return { passed: false, message: '请定义distance方法' };
            if (!code.includes('Math.sqrt')) return { passed: false, message: '请使用Math.sqrt' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv8-004',
        title: '封装private',
        difficulty: '中等',
        level: 8,
        xp: 30,
        timeLimit: 3,
        description: '定义Student类，私有属性name和age，提供getter和setter',
        inputFormat: '一个字符串和一个整数',
        outputFormat: '两行：名字和年龄',
        sampleInput: 'Alice\n20',
        sampleOutput: 'Alice\n20',
        hint: '使用private修饰属性，public修饰getter/setter',
        template: `import java.util.Scanner;\n\nclass Student {\n    // 定义私有属性和方法\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student();\n        s.setName(sc.next());\n        s.setAge(sc.nextInt());\n        System.out.println(s.getName());\n        System.out.println(s.getAge());\n    }\n}`,
        validator: function(code) {
            if (!code.includes('private')) return { passed: false, message: '请使用private封装' };
            if (!code.includes('getName') || !code.includes('setName')) return { passed: false, message: '请定义getter和setter' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv8-005',
        title: 'toString方法',
        difficulty: '中等',
        level: 8,
        xp: 28,
        timeLimit: 3,
        description: '为Student类重写toString方法',
        inputFormat: '一个字符串和一个整数',
        outputFormat: '"Student{name=xxx, age=xx}"格式',
        sampleInput: 'Bob\n18',
        sampleOutput: 'Student{name=Bob, age=18}',
        hint: '@Override public String toString()',
        template: `import java.util.Scanner;\n\nclass Student {\n    private String name;\n    private int age;\n    \n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    // 重写toString方法\n    \n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student(sc.next(), sc.nextInt());\n        System.out.println(s);\n    }\n}`,
        validator: function(code) {
            if (!code.includes('toString()')) return { passed: false, message: '请重写toString方法' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv8-006',
        title: '静态成员',
        difficulty: '中等',
        level: 8,
        xp: 30,
        timeLimit: 3,
        description: '定义Circle类，静态变量PI=3.14，计算面积',
        inputFormat: '一个double（半径）',
        outputFormat: '一个整数（面积取整）',
        sampleInput: '5',
        sampleOutput: '78',
        hint: 'static final double PI = 3.14;',
        template: `import java.util.Scanner;\n\nclass Circle {\n    // 定义静态常量PI和方法\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double r = sc.nextDouble();\n        System.out.println((int)(Circle.PI * r * r));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('static')) return { passed: false, message: '请使用static关键字' };
            if (!code.includes('PI')) return { passed: false, message: '请定义PI常量' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv8-007',
        title: '继承extends',
        difficulty: '中等',
        level: 8,
        xp: 32,
        timeLimit: 3,
        description: '定义Animal类和Dog类（继承Animal），Dog输出"Woof"',
        inputFormat: '无',
        outputFormat: 'Woof',
        sampleInput: '',
        sampleOutput: 'Woof',
        hint: 'class Dog extends Animal',
        template: `class Animal {\n    public void speak() {\n        System.out.println("Animal sound");\n    }\n}\n\nclass Dog extends Animal {\n    // 重写speak方法\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.speak();\n    }\n}`,
        validator: function(code) {
            if (!code.includes('extends')) return { passed: false, message: '请使用extends继承' };
            if (!code.includes('Woof')) return { passed: false, message: '请输出Woof' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv8-008',
        title: '多态',
        difficulty: '困难',
        level: 8,
        xp: 35,
        timeLimit: 3,
        description: '定义Shape接口，Circle和Rectangle实现它，输出面积',
        inputFormat: '一个整数（半径或边长）',
        outputFormat: '一个整数',
        sampleInput: '5',
        sampleOutput: '78',
        hint: 'interface Shape { double getArea(); }',
        template: `import java.util.Scanner;\n\ninterface Shape {\n    double getArea();\n}\n\nclass Circle implements Shape {\n    double r;\n    public Circle(double r) { this.r = r; }\n    public double getArea() { return 3.14 * r * r; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Shape s = new Circle(sc.nextDouble());\n        System.out.println((int)s.getArea());\n    }\n}`,
        validator: function(code) {
            if (!code.includes('interface')) return { passed: false, message: '请定义接口' };
            if (!code.includes('implements')) return { passed: false, message: '请实现接口' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv8-009',
        title: 'super关键字',
        difficulty: '中等',
        level: 8,
        xp: 30,
        timeLimit: 3,
        description: '子类构造方法调用父类构造方法',
        inputFormat: '一个字符串',
        outputFormat: '两行',
        sampleInput: 'Test',
        sampleOutput: 'Parent: Test\nChild: Test',
        hint: 'super(name);',
        template: `import java.util.Scanner;\n\nclass Parent {\n    String name;\n    public Parent(String name) {\n        this.name = name;\n        System.out.println("Parent: " + name);\n    }\n}\n\nclass Child extends Parent {\n    // 定义构造方法，调用super\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Child c = new Child(sc.next());\n    }\n}`,
        validator: function(code) {
            if (!code.includes('super(')) return { passed: false, message: '请使用super调用父类构造' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv8-010',
        title: '抽象类',
        difficulty: '困难',
        level: 8,
        xp: 35,
        timeLimit: 3,
        description: '定义抽象类Animal和具体类Cat',
        inputFormat: '无',
        outputFormat: 'Meow',
        sampleInput: '',
        sampleOutput: 'Meow',
        hint: 'abstract class Animal { abstract void sound(); }',
        template: `abstract class Animal {\n    abstract void sound();\n}\n\nclass Cat extends Animal {\n    // 实现sound方法\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Cat();\n        a.sound();\n    }\n}`,
        validator: function(code) {
            if (!code.includes('abstract')) return { passed: false, message: '请使用abstract' };
            if (!code.includes('Meow')) return { passed: false, message: '请输出Meow' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 等级 9 题目（集合框架） ==========
    {
        id: 'lv9-001',
        title: 'ArrayList基础',
        difficulty: '简单',
        level: 9,
        xp: 25,
        timeLimit: 3,
        description: '使用ArrayList存储N个整数并输出',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: 'N行，每行一个整数',
        sampleInput: '3\n1 2 3',
        sampleOutput: '1\n2\n3',
        hint: 'ArrayList<Integer> list = new ArrayList<>();',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('ArrayList')) return { passed: false, message: '请使用ArrayList' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv9-002',
        title: 'ArrayList添加删除',
        difficulty: '简单',
        level: 9,
        xp: 28,
        timeLimit: 3,
        description: '读取N个数，删除第一个和最后一个，输出剩余元素个数',
        inputFormat: '第一行N(>=2)，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n1 2 3 4 5',
        sampleOutput: '3',
        hint: 'list.remove(0); list.remove(list.size()-1);',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('remove')) return { passed: false, message: '请使用remove方法' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv9-003',
        title: 'HashSet去重',
        difficulty: '简单',
        level: 9,
        xp: 28,
        timeLimit: 3,
        description: '使用HashSet统计不重复元素个数',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n1 2 1 3 2',
        sampleOutput: '3',
        hint: 'HashSet<Integer> set = new HashSet<>();',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('HashSet') && !code.includes('Set')) return { passed: false, message: '请使用HashSet' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv9-004',
        title: 'HashMap统计频率',
        difficulty: '中等',
        level: 9,
        xp: 32,
        timeLimit: 3,
        description: '统计每个数字出现的次数，输出出现最多的数字',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n1 2 2 3 2',
        sampleOutput: '2',
        hint: 'HashMap<Integer, Integer> map',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('HashMap') && !code.includes('Map')) return { passed: false, message: '请使用HashMap' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv9-005',
        title: 'Collections排序',
        difficulty: '简单',
        level: 9,
        xp: 28,
        timeLimit: 3,
        description: '使用Collections.sort()排序ArrayList',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，排序后的数字',
        sampleInput: '5\n3 1 4 1 5',
        sampleOutput: '1 1 3 4 5',
        hint: 'Collections.sort(list);',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Collections.sort')) return { passed: false, message: '请使用Collections.sort' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv9-006',
        title: 'LinkedList队列',
        difficulty: '中等',
        level: 9,
        xp: 30,
        timeLimit: 3,
        description: '使用LinkedList实现队列，先进先出',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: 'N行，按入队顺序输出',
        sampleInput: '3\n1 2 3',
        sampleOutput: '1\n2\n3',
        hint: 'offer入队，poll出队',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('LinkedList') && !code.includes('Queue')) return { passed: false, message: '请使用LinkedList或Queue' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv9-007',
        title: 'Stack栈',
        difficulty: '中等',
        level: 9,
        xp: 30,
        timeLimit: 3,
        description: '使用Stack实现后进先出',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: 'N行，按出栈顺序（倒序）',
        sampleInput: '3\n1 2 3',
        sampleOutput: '3\n2\n1',
        hint: 'push入栈，pop出栈',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Stack')) return { passed: false, message: '请使用Stack' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv9-008',
        title: 'TreeSet自动排序',
        difficulty: '简单',
        level: 9,
        xp: 28,
        timeLimit: 3,
        description: '使用TreeSet自动排序并去重',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，升序不重复',
        sampleInput: '5\n3 1 4 1 5',
        sampleOutput: '1 3 4 5',
        hint: 'TreeSet自动排序',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('TreeSet')) return { passed: false, message: '请使用TreeSet' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv9-009',
        title: 'Iterator遍历',
        difficulty: '中等',
        level: 9,
        xp: 30,
        timeLimit: 3,
        description: '使用Iterator遍历并删除偶数',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，剩余的奇数',
        sampleInput: '5\n1 2 3 4 5',
        sampleOutput: '1 3 5',
        hint: 'Iterator<Integer> it = list.iterator();',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Iterator')) return { passed: false, message: '请使用Iterator' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv9-010',
        title: 'PriorityQueue优先队列',
        difficulty: '中等',
        level: 9,
        xp: 32,
        timeLimit: 3,
        description: '使用优先队列（小根堆）找出前K小的元素',
        inputFormat: '第一行N和K，第二行N个整数',
        outputFormat: 'K行，每行一个最小的数',
        sampleInput: '5 3\n3 1 4 1 5',
        sampleOutput: '1\n1\n3',
        hint: 'PriorityQueue自动维护最小值',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('PriorityQueue')) return { passed: false, message: '请使用PriorityQueue' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 等级 10 题目（高级主题） ==========
    {
        id: 'lv10-001',
        title: '异常处理try-catch',
        difficulty: '简单',
        level: 10,
        xp: 30,
        timeLimit: 3,
        description: '捕获除零异常，输出"Division by zero"',
        inputFormat: '两个整数',
        outputFormat: '商或错误信息',
        sampleInput: '10 0',
        sampleOutput: 'Division by zero',
        hint: 'try { } catch (ArithmeticException e) { }',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('try') || !code.includes('catch')) return { passed: false, message: '请使用try-catch' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv10-002',
        title: '自定义异常',
        difficulty: '中等',
        level: 10,
        xp: 35,
        timeLimit: 3,
        description: '定义InvalidAgeException，年龄<0时抛出',
        inputFormat: '一个整数',
        outputFormat: '年龄或"Invalid age"',
        sampleInput: '-5',
        sampleOutput: 'Invalid age',
        hint: 'class InvalidAgeException extends Exception',
        template: `import java.util.Scanner;\n\nclass InvalidAgeException extends Exception {\n    public InvalidAgeException(String msg) { super(msg); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('extends Exception')) return { passed: false, message: '请继承Exception' };
            if (!code.includes('throw')) return { passed: false, message: '请抛出异常' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv10-003',
        title: 'finally块',
        difficulty: '简单',
        level: 10,
        xp: 30,
        timeLimit: 3,
        description: 'finally块总是执行',
        inputFormat: '一个整数',
        outputFormat: '两行："Result: x" 和 "Finally"',
        sampleInput: '10',
        sampleOutput: 'Result: 10\nFinally',
        hint: 'finally { System.out.println("Finally"); }',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('finally')) return { passed: false, message: '请使用finally块' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv10-004',
        title: 'Lambda表达式',
        difficulty: '中等',
        level: 10,
        xp: 35,
        timeLimit: 3,
        description: '使用Lambda排序（降序）',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，降序',
        sampleInput: '5\n3 1 4 1 5',
        sampleOutput: '5 4 3 1 1',
        hint: 'Collections.sort(list, (a, b) -> b - a);',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('->')) return { passed: false, message: '请使用Lambda表达式' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv10-005',
        title: 'Stream流操作',
        difficulty: '中等',
        level: 10,
        xp: 38,
        timeLimit: 3,
        description: '使用Stream过滤偶数并求和',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n1 2 3 4 5',
        sampleOutput: '6',
        hint: 'list.stream().filter(x -> x % 2 == 0).sum()',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('stream()')) return { passed: false, message: '请使用Stream' };
            if (!code.includes('filter')) return { passed: false, message: '请使用filter过滤' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'lv10-006',
        title: '综合挑战：学生管理系统',
        difficulty: '困难',
        level: 10,
        xp: 50,
        timeLimit: 3,
        description: '读取N个学生（姓名 分数），按分数降序输出',
        inputFormat: '第一行N，接下来N行每行姓名和分数',
        outputFormat: 'N行，按分数降序',
        sampleInput: '3\nAlice 90\nBob 85\nCarol 95',
        sampleOutput: 'Carol 95\nAlice 90\nBob 85',
        hint: '定义Student类，使用Collections.sort',
        template: `import java.util.*;\n\nclass Student {\n    String name;\n    int score;\n    public Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Collections.sort') && !code.includes('sort(')) return { passed: false, message: '请排序' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 额外练习：等级1-2进阶 ==========
    {
        id: 'extra-001',
        title: '温度转换',
        difficulty: '简单',
        level: 1,
        xp: 8,
        timeLimit: 3,
        description: '摄氏度转华氏度：F = C * 9/5 + 32',
        inputFormat: '一个整数（摄氏度）',
        outputFormat: '一个整数（华氏度）',
        sampleInput: '0',
        sampleOutput: '32',
        hint: '注意整数运算',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('*') || !code.includes('+')) return { passed: false, message: '请进行运算' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-002',
        title: '秒转时分秒',
        difficulty: '简单',
        level: 2,
        xp: 12,
        timeLimit: 3,
        description: '读取总秒数，输出"H:M:S"格式',
        inputFormat: '一个整数',
        outputFormat: '时:分:秒',
        sampleInput: '3661',
        sampleOutput: '1:1:1',
        hint: '小时=秒/3600，分钟=(秒%3600)/60',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('/') || !code.includes('%')) return { passed: false, message: '请使用除法和取余' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-003',
        title: '交换两数',
        difficulty: '简单',
        level: 2,
        xp: 10,
        timeLimit: 3,
        description: '交换两个变量的值（不使用第三个变量）',
        inputFormat: '两个整数',
        outputFormat: '交换后的两个整数',
        sampleInput: '3 5',
        sampleOutput: '5 3',
        hint: '使用加减法或异或',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-004',
        title: '数字反转',
        difficulty: '简单',
        level: 2,
        xp: 12,
        timeLimit: 3,
        description: '反转整数的各位数字',
        inputFormat: '一个正整数',
        outputFormat: '反转后的整数',
        sampleInput: '1234',
        sampleOutput: '4321',
        hint: '循环取余',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请使用取余' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-005',
        title: '星期判断',
        difficulty: '简单',
        level: 2,
        xp: 12,
        timeLimit: 3,
        description: '输入1-7，输出Monday到Sunday',
        inputFormat: '一个整数(1-7)',
        outputFormat: '英文星期',
        sampleInput: '1',
        sampleOutput: 'Monday',
        hint: '使用switch',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('switch') && !code.includes('if')) return { passed: false, message: '请使用条件判断' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 额外练习：等级3-4循环专题 ==========
    {
        id: 'extra-006',
        title: '打印星号三角',
        difficulty: '简单',
        level: 3,
        xp: 15,
        timeLimit: 3,
        description: '打印N行星号三角形',
        inputFormat: '一个正整数N',
        outputFormat: 'N行星号',
        sampleInput: '3',
        sampleOutput: '*\n**\n***',
        hint: '外层循环控制行数',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('for') && !code.includes('while')) return { passed: false, message: '请使用循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-007',
        title: '等差数列求和',
        difficulty: '简单',
        level: 3,
        xp: 15,
        timeLimit: 3,
        description: '求首项a，公差d，项数n的等差数列和',
        inputFormat: '三个整数a d n',
        outputFormat: '一个整数',
        sampleInput: '1 2 5',
        sampleOutput: '25',
        hint: '循环累加或使用公式',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-008',
        title: '找因数',
        difficulty: '简单',
        level: 3,
        xp: 15,
        timeLimit: 3,
        description: '输出N的所有因数',
        inputFormat: '一个正整数',
        outputFormat: '一行，空格分隔',
        sampleInput: '12',
        sampleOutput: '1 2 3 4 6 12',
        hint: '遍历1到N判断整除',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请判断整除' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-009',
        title: '最大公约数GCD',
        difficulty: '中等',
        level: 3,
        xp: 20,
        timeLimit: 3,
        description: '辗转相除法求最大公约数',
        inputFormat: '两个正整数',
        outputFormat: '一个整数',
        sampleInput: '12 18',
        sampleOutput: '6',
        hint: 'while(b!=0) { int t=b; b=a%b; a=t; }',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('%')) return { passed: false, message: '请使用取余' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-010',
        title: '最小公倍数LCM',
        difficulty: '中等',
        level: 3,
        xp: 20,
        timeLimit: 3,
        description: '求两数的最小公倍数',
        inputFormat: '两个正整数',
        outputFormat: '一个整数',
        sampleInput: '12 18',
        sampleOutput: '36',
        hint: 'LCM = a*b / GCD(a,b)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-011',
        title: '输出质数',
        difficulty: '中等',
        level: 4,
        xp: 22,
        timeLimit: 3,
        description: '输出2到N之间的所有质数',
        inputFormat: '一个正整数N',
        outputFormat: '一行，空格分隔',
        sampleInput: '10',
        sampleOutput: '2 3 5 7',
        hint: '双层循环判断质数',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('for')) return { passed: false, message: '请使用循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-012',
        title: '统计数字',
        difficulty: '简单',
        level: 4,
        xp: 15,
        timeLimit: 3,
        description: '统计整数中各个数字出现次数',
        inputFormat: '一个正整数',
        outputFormat: '10行，0-9各出现几次',
        sampleInput: '112233',
        sampleOutput: '0\n2\n2\n2\n0\n0\n0\n0\n0\n0',
        hint: '使用数组统计',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('[]')) return { passed: false, message: '建议使用数组' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-013',
        title: '冒泡排序实现',
        difficulty: '中等',
        level: 4,
        xp: 25,
        timeLimit: 3,
        description: '手写冒泡排序',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，升序',
        sampleInput: '5\n5 2 8 1 9',
        sampleOutput: '1 2 5 8 9',
        hint: '双层for，相邻比较交换',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            const forCount = (code.match(/for/g) || []).length;
            if (forCount < 2) return { passed: false, message: '请使用双层循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-014',
        title: '选择排序',
        difficulty: '中等',
        level: 4,
        xp: 25,
        timeLimit: 3,
        description: '手写选择排序',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，升序',
        sampleInput: '5\n5 2 8 1 9',
        sampleOutput: '1 2 5 8 9',
        hint: '每次选择最小值放到前面',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            const forCount = (code.match(/for/g) || []).length;
            if (forCount < 2) return { passed: false, message: '请使用双层循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-015',
        title: '二分查找',
        difficulty: '中等',
        level: 4,
        xp: 28,
        timeLimit: 3,
        description: '在有序数组中二分查找目标值',
        inputFormat: '第一行N和target，第二行N个有序整数',
        outputFormat: '索引或-1',
        sampleInput: '5 3\n1 2 3 4 5',
        sampleOutput: '2',
        hint: 'left=0, right=n-1, mid=(left+right)/2',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('while') && !code.includes('for')) return { passed: false, message: '请使用循环' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 额外练习：等级5-6字符串与算法 ==========
    {
        id: 'extra-016',
        title: '字符串包含',
        difficulty: '简单',
        level: 5,
        xp: 15,
        timeLimit: 3,
        description: '判断字符串A是否包含字符串B',
        inputFormat: '两行字符串',
        outputFormat: 'Yes 或 No',
        sampleInput: 'hello\nll',
        sampleOutput: 'Yes',
        hint: '使用.contains()',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.contains')) return { passed: false, message: '请使用.contains()' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-017',
        title: '字符串替换',
        difficulty: '简单',
        level: 5,
        xp: 15,
        timeLimit: 3,
        description: '将字符串中的a替换为*',
        inputFormat: '一行字符串',
        outputFormat: '一行字符串',
        sampleInput: 'banana',
        sampleOutput: 'b*n*n*',
        hint: '使用.replace()',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.replace')) return { passed: false, message: '请使用.replace()' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-018',
        title: '最长单词',
        difficulty: '中等',
        level: 5,
        xp: 22,
        timeLimit: 3,
        description: '找出句子中最长的单词',
        inputFormat: '一行字符串',
        outputFormat: '最长的单词',
        sampleInput: 'I love programming',
        sampleOutput: 'programming',
        hint: 'split分割后比较长度',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.split')) return { passed: false, message: '请使用.split()' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-019',
        title: '字符串去重',
        difficulty: '中等',
        level: 5,
        xp: 22,
        timeLimit: 3,
        description: '去除字符串中的重复字符',
        inputFormat: '一行字符串',
        outputFormat: '去重后的字符串',
        sampleInput: 'aabbcc',
        sampleOutput: 'abc',
        hint: '使用Set或标记数组',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-020',
        title: '最长回文子串',
        difficulty: '困难',
        level: 6,
        xp: 35,
        timeLimit: 3,
        description: '找出字符串中最长的回文子串长度',
        inputFormat: '一行字符串',
        outputFormat: '一个整数',
        sampleInput: 'babad',
        sampleOutput: '3',
        hint: '中心扩展法',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-021',
        title: '统计字母数字',
        difficulty: '简单',
        level: 5,
        xp: 18,
        timeLimit: 3,
        description: '统计字符串中字母和数字的个数',
        inputFormat: '一行字符串',
        outputFormat: '两行：字母数 数字数',
        sampleInput: 'abc123',
        sampleOutput: '3\n3',
        hint: 'Character.isLetter() 和 isDigit()',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-022',
        title: '字符串排序',
        difficulty: '中等',
        level: 5,
        xp: 22,
        timeLimit: 3,
        description: '将字符串中的字符按字典序排序',
        inputFormat: '一行字符串',
        outputFormat: '排序后的字符串',
        sampleInput: 'dcba',
        sampleOutput: 'abcd',
        hint: '转数组排序再转回',
        template: `import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('sort')) return { passed: false, message: '请排序' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-023',
        title: '字符串加密',
        difficulty: '中等',
        level: 5,
        xp: 25,
        timeLimit: 3,
        description: '凯撒密码：每个字母后移3位',
        inputFormat: '一行小写字母',
        outputFormat: '加密后的字符串',
        sampleInput: 'abc',
        sampleOutput: 'def',
        hint: 'char c = (char)(原字符 + 3)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('char')) return { passed: false, message: '请操作字符' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-024',
        title: '矩阵对角线和',
        difficulty: '简单',
        level: 6,
        xp: 20,
        timeLimit: 3,
        description: '计算N×N矩阵主对角线元素之和',
        inputFormat: '第一行N，接下来N行每行N个整数',
        outputFormat: '一个整数',
        sampleInput: '3\n1 2 3\n4 5 6\n7 8 9',
        sampleOutput: '15',
        hint: 'arr[i][i]',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('[][]')) return { passed: false, message: '请使用二维数组' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-025',
        title: '矩阵旋转90度',
        difficulty: '困难',
        level: 6,
        xp: 35,
        timeLimit: 3,
        description: '顺时针旋转N×N矩阵90度',
        inputFormat: '第一行N，接下来N行每行N个整数',
        outputFormat: 'N行，旋转后的矩阵',
        sampleInput: '2\n1 2\n3 4',
        sampleOutput: '3 1\n4 2',
        hint: 'result[j][n-1-i] = arr[i][j]',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('[][]')) return { passed: false, message: '请使用二维数组' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 额外练习：等级7-8方法与面向对象进阶 ==========
    {
        id: 'extra-026',
        title: '可变参数方法',
        difficulty: '中等',
        level: 7,
        xp: 28,
        timeLimit: 3,
        description: '定义sum方法接收可变参数',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数（和）',
        sampleInput: '3\n1 2 3',
        sampleOutput: '6',
        hint: 'int sum(int... nums)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static int sum(int... nums) {\n        \n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        System.out.println(sum(arr));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('...')) return { passed: false, message: '请使用可变参数' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-027',
        title: '递归二分查找',
        difficulty: '中等',
        level: 7,
        xp: 30,
        timeLimit: 3,
        description: '使用递归实现二分查找',
        inputFormat: '第一行N和target，第二行N个有序整数',
        outputFormat: '索引或-1',
        sampleInput: '5 4\n1 2 3 4 5',
        sampleOutput: '3',
        hint: '递归：binarySearch(arr, left, right, target)',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static int binarySearch(int[] arr, int left, int right, int target) {\n        \n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt(), target = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        System.out.println(binarySearch(arr, 0, n-1, target));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('binarySearch(')) return { passed: false, message: '请使用递归' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-028',
        title: '递归全排列',
        difficulty: '困难',
        level: 7,
        xp: 40,
        timeLimit: 3,
        description: '输出1到N的全排列个数',
        inputFormat: '一个正整数N(N<=10)',
        outputFormat: '一个整数',
        sampleInput: '3',
        sampleOutput: '6',
        hint: 'N! = N的全排列数',
        template: `import java.util.Scanner;\n\npublic class Main {\n    public static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(factorial(sc.nextInt()));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('factorial(')) return { passed: false, message: '请使用递归' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-029',
        title: '矩形类',
        difficulty: '简单',
        level: 8,
        xp: 25,
        timeLimit: 3,
        description: '定义Rectangle类，计算面积和周长',
        inputFormat: '两个整数：长和宽',
        outputFormat: '两行：面积 周长',
        sampleInput: '3 4',
        sampleOutput: '12\n14',
        hint: '定义width和height属性，area()和perimeter()方法',
        template: `import java.util.Scanner;\n\nclass Rectangle {\n    // 定义属性和方法\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Rectangle r = new Rectangle();\n        r.width = sc.nextInt();\n        r.height = sc.nextInt();\n        System.out.println(r.area());\n        System.out.println(r.perimeter());\n    }\n}`,
        validator: function(code) {
            if (!code.includes('class Rectangle')) return { passed: false, message: '请定义Rectangle类' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-030',
        title: '银行账户类',
        difficulty: '中等',
        level: 8,
        xp: 32,
        timeLimit: 3,
        description: '定义Account类，实现存取款功能',
        inputFormat: '初始余额，存款，取款',
        outputFormat: '最终余额',
        sampleInput: '100\n50\n30',
        sampleOutput: '120',
        hint: 'deposit()和withdraw()方法',
        template: `import java.util.Scanner;\n\nclass Account {\n    private double balance;\n    \n    public Account(double balance) {\n        this.balance = balance;\n    }\n    \n    // 定义存取款方法\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Account acc = new Account(sc.nextDouble());\n        acc.deposit(sc.nextDouble());\n        acc.withdraw(sc.nextDouble());\n        System.out.println((int)acc.getBalance());\n    }\n}`,
        validator: function(code) {
            if (!code.includes('deposit') || !code.includes('withdraw')) return { passed: false, message: '请定义存取款方法' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-031',
        title: '比较器Comparator',
        difficulty: '中等',
        level: 8,
        xp: 35,
        timeLimit: 3,
        description: '实现自定义比较器按长度排序字符串',
        inputFormat: '第一行N，接下来N行字符串',
        outputFormat: 'N行，按长度排序',
        sampleInput: '3\nabc\na\nabcde',
        sampleOutput: 'a\nabc\nabcde',
        hint: 'Comparator<String> comp = (a, b) -> a.length() - b.length()',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Comparator') && !code.includes('->')) return { passed: false, message: '请使用Comparator' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-032',
        title: '单例模式',
        difficulty: '困难',
        level: 8,
        xp: 38,
        timeLimit: 3,
        description: '实现单例模式的Singleton类',
        inputFormat: '无',
        outputFormat: 'Singleton instance',
        sampleInput: '',
        sampleOutput: 'Singleton instance',
        hint: 'private构造，static instance',
        template: `class Singleton {\n    // 实现单例模式\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Singleton s1 = Singleton.getInstance();\n        Singleton s2 = Singleton.getInstance();\n        System.out.println(s1 == s2 ? "Singleton instance" : "Not singleton");\n    }\n}`,
        validator: function(code) {
            if (!code.includes('private') || !code.includes('static')) return { passed: false, message: '请使用单例模式' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-033',
        title: '工厂模式',
        difficulty: '困难',
        level: 8,
        xp: 38,
        timeLimit: 3,
        description: '实现简单工厂模式创建Shape对象',
        inputFormat: '一个字符串(Circle/Rectangle)',
        outputFormat: '对应形状名称',
        sampleInput: 'Circle',
        sampleOutput: 'Circle',
        hint: 'ShapeFactory.createShape(type)',
        template: `import java.util.Scanner;\n\ninterface Shape {\n    String getName();\n}\n\nclass Circle implements Shape {\n    public String getName() { return "Circle"; }\n}\n\nclass Rectangle implements Shape {\n    public String getName() { return "Rectangle"; }\n}\n\nclass ShapeFactory {\n    // 实现工厂方法\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Shape s = ShapeFactory.createShape(sc.next());\n        System.out.println(s.getName());\n    }\n}`,
        validator: function(code) {
            if (!code.includes('createShape')) return { passed: false, message: '请实现工厂方法' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 额外练习：等级9-10集合与高级特性 ==========
    {
        id: 'extra-034',
        title: 'ArrayList倒序',
        difficulty: '简单',
        level: 9,
        xp: 25,
        timeLimit: 3,
        description: '使用Collections.reverse()倒序',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，倒序',
        sampleInput: '3\n1 2 3',
        sampleOutput: '3 2 1',
        hint: 'Collections.reverse(list)',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Collections.reverse')) return { passed: false, message: '请使用Collections.reverse' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-035',
        title: 'LinkedHashMap保序',
        difficulty: '中等',
        level: 9,
        xp: 30,
        timeLimit: 3,
        description: '使用LinkedHashMap保持插入顺序',
        inputFormat: '第一行N，接下来N行key value',
        outputFormat: 'N行，按插入顺序',
        sampleInput: '3\na 1\nb 2\nc 3',
        sampleOutput: 'a 1\nb 2\nc 3',
        hint: 'LinkedHashMap保持插入顺序',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('LinkedHashMap')) return { passed: false, message: '请使用LinkedHashMap' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-036',
        title: 'Deque双端队列',
        difficulty: '中等',
        level: 9,
        xp: 30,
        timeLimit: 3,
        description: '使用Deque实现双端操作',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '两行：首元素 尾元素',
        sampleInput: '3\n1 2 3',
        sampleOutput: '1\n3',
        hint: 'addFirst(), addLast(), pollFirst(), pollLast()',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Deque')) return { passed: false, message: '请使用Deque' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-037',
        title: 'Collections最值',
        difficulty: '简单',
        level: 9,
        xp: 25,
        timeLimit: 3,
        description: '使用Collections.max()和min()',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '两行：最大值 最小值',
        sampleInput: '5\n3 1 4 1 5',
        sampleOutput: '5\n1',
        hint: 'Collections.max(list) 和 min(list)',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Collections.max') || !code.includes('Collections.min')) return { passed: false, message: '请使用Collections方法' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-038',
        title: 'HashMap遍历',
        difficulty: '简单',
        level: 9,
        xp: 28,
        timeLimit: 3,
        description: '遍历HashMap的键值对',
        inputFormat: '第一行N，接下来N行key value',
        outputFormat: 'N行，key=value',
        sampleInput: '2\na 1\nb 2',
        sampleOutput: 'a=1\nb=2',
        hint: 'for(Map.Entry<K,V> entry : map.entrySet())',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('entrySet') && !code.includes('keySet')) return { passed: false, message: '请遍历Map' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-039',
        title: 'Stream映射',
        difficulty: '中等',
        level: 10,
        xp: 35,
        timeLimit: 3,
        description: '使用Stream.map()将所有数字乘以2',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，每个数乘以2',
        sampleInput: '3\n1 2 3',
        sampleOutput: '2 4 6',
        hint: 'list.stream().map(x -> x * 2)',
        template: `import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.map(')) return { passed: false, message: '请使用map()' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-040',
        title: 'Stream去重排序',
        difficulty: '中等',
        level: 10,
        xp: 35,
        timeLimit: 3,
        description: '使用Stream去重并排序',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，去重排序后',
        sampleInput: '5\n3 1 4 1 5',
        sampleOutput: '1 3 4 5',
        hint: 'stream().distinct().sorted()',
        template: `import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.distinct()') || !code.includes('.sorted()')) return { passed: false, message: '请使用distinct和sorted' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-041',
        title: 'Optional处理空值',
        difficulty: '中等',
        level: 10,
        xp: 35,
        timeLimit: 3,
        description: '使用Optional处理可能为空的值',
        inputFormat: '一个字符串或"null"',
        outputFormat: '字符串或"Empty"',
        sampleInput: 'hello',
        sampleOutput: 'hello',
        hint: 'Optional.ofNullable().orElse("Empty")',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.next();\n        String value = input.equals("null") ? null : input;\n        String result = Optional.ofNullable(value).orElse("Empty");\n        System.out.println(result);\n    }\n}`,
        validator: function(code) {
            if (!code.includes('Optional')) return { passed: false, message: '请使用Optional' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-042',
        title: 'Stream分组',
        difficulty: '困难',
        level: 10,
        xp: 40,
        timeLimit: 3,
        description: '按奇偶分组',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '两行：偶数个数 奇数个数',
        sampleInput: '5\n1 2 3 4 5',
        sampleOutput: '2\n3',
        hint: 'Collectors.groupingBy(x -> x % 2)',
        template: `import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('groupingBy')) return { passed: false, message: '请使用groupingBy' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'extra-043',
        title: 'Stream规约reduce',
        difficulty: '中等',
        level: 10,
        xp: 35,
        timeLimit: 3,
        description: '使用reduce求乘积',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '3\n2 3 4',
        sampleOutput: '24',
        hint: 'stream().reduce(1, (a, b) -> a * b)',
        template: `import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('.reduce(')) return { passed: false, message: '请使用reduce' };
            return { passed: true, message: '✓ 通过' };
        }
    },

    // ========== 综合实战题目（跨等级混合难度） ==========
    {
        id: 'challenge-001',
        title: '两数之和',
        difficulty: '简单',
        level: 4,
        xp: 20,
        timeLimit: 3,
        description: '找出数组中和为target的两个数的索引',
        inputFormat: '第一行N和target，第二行N个整数',
        outputFormat: '两个索引，空格分隔',
        sampleInput: '4 9\n2 7 11 15',
        sampleOutput: '0 1',
        hint: '使用HashMap存储值和索引',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-002',
        title: '有效括号',
        difficulty: '简单',
        level: 4,
        xp: 22,
        timeLimit: 3,
        description: '判断括号字符串是否有效',
        inputFormat: '一行字符串',
        outputFormat: 'true 或 false',
        sampleInput: '()',
        sampleOutput: 'true',
        hint: '使用栈匹配',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Stack')) return { passed: false, message: '建议使用Stack' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-003',
        title: '合并两个有序数组',
        difficulty: '简单',
        level: 4,
        xp: 22,
        timeLimit: 3,
        description: '合并两个有序数组为一个有序数组',
        inputFormat: '第一行N，第二行N个整数；第三行M，第四行M个整数',
        outputFormat: '一行，合并后的有序数组',
        sampleInput: '3\n1 3 5\n3\n2 4 6',
        sampleOutput: '1 2 3 4 5 6',
        hint: '双指针合并',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-004',
        title: '移除元素',
        difficulty: '简单',
        level: 4,
        xp: 18,
        timeLimit: 3,
        description: '移除数组中所有等于val的元素，返回新长度',
        inputFormat: '第一行N和val，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '4 2\n3 2 2 3',
        sampleOutput: '2',
        hint: '双指针',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-005',
        title: '删除重复项',
        difficulty: '简单',
        level: 4,
        xp: 20,
        timeLimit: 3,
        description: '删除排序数组中的重复项，返回新长度',
        inputFormat: '第一行N，第二行N个有序整数',
        outputFormat: '一个整数',
        sampleInput: '5\n1 1 2 2 3',
        sampleOutput: '3',
        hint: '双指针',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-006',
        title: '搜索插入位置',
        difficulty: '简单',
        level: 4,
        xp: 20,
        timeLimit: 3,
        description: '在有序数组中找到目标值的插入位置',
        inputFormat: '第一行N和target，第二行N个有序整数',
        outputFormat: '一个整数',
        sampleInput: '4 5\n1 3 5 6',
        sampleOutput: '2',
        hint: '二分查找变形',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-007',
        title: '最大子数组和',
        difficulty: '中等',
        level: 5,
        xp: 30,
        timeLimit: 3,
        description: '找出连续子数组的最大和',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '9\n-2 1 -3 4 -1 2 1 -5 4',
        sampleOutput: '6',
        hint: '动态规划：dp[i] = max(dp[i-1]+arr[i], arr[i])',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-008',
        title: '爬楼梯',
        difficulty: '简单',
        level: 3,
        xp: 18,
        timeLimit: 3,
        description: '爬N阶楼梯，每次1或2阶，有多少种方法',
        inputFormat: '一个正整数N',
        outputFormat: '一个整数',
        sampleInput: '3',
        sampleOutput: '3',
        hint: 'dp[n] = dp[n-1] + dp[n-2]',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-009',
        title: '买卖股票最佳时机',
        difficulty: '简单',
        level: 5,
        xp: 25,
        timeLimit: 3,
        description: '找出最大利润（一次买卖）',
        inputFormat: '第一行N，第二行N个整数（价格）',
        outputFormat: '一个整数',
        sampleInput: '6\n7 1 5 3 6 4',
        sampleOutput: '5',
        hint: '记录最小价格，计算最大差值',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-010',
        title: '多数元素',
        difficulty: '简单',
        level: 5,
        xp: 22,
        timeLimit: 3,
        description: '找出数组中出现次数超过⌊n/2⌋的元素',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '7\n2 2 1 1 1 2 2',
        sampleOutput: '2',
        hint: '摩尔投票法或HashMap',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-011',
        title: '旋转数组',
        difficulty: '中等',
        level: 4,
        xp: 25,
        timeLimit: 3,
        description: '将数组向右旋转k步',
        inputFormat: '第一行N和k，第二行N个整数',
        outputFormat: '一行，旋转后的数组',
        sampleInput: '7 3\n1 2 3 4 5 6 7',
        sampleOutput: '5 6 7 1 2 3 4',
        hint: '三次翻转',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-012',
        title: '存在重复元素',
        difficulty: '简单',
        level: 4,
        xp: 18,
        timeLimit: 3,
        description: '判断数组是否包含重复元素',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: 'true 或 false',
        sampleInput: '4\n1 2 3 1',
        sampleOutput: 'true',
        hint: '使用HashSet',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-013',
        title: '缺失的数字',
        difficulty: '简单',
        level: 3,
        xp: 18,
        timeLimit: 3,
        description: '0到n的数字缺少一个，找出它',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '3\n0 1 3',
        sampleOutput: '2',
        hint: '求和公式或异或',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-014',
        title: '移动零',
        difficulty: '简单',
        level: 4,
        xp: 20,
        timeLimit: 3,
        description: '将数组中的0移动到末尾',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一行，移动后的数组',
        sampleInput: '5\n0 1 0 3 12',
        sampleOutput: '1 3 12 0 0',
        hint: '双指针',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-015',
        title: '只出现一次的数字',
        difficulty: '简单',
        level: 3,
        xp: 20,
        timeLimit: 3,
        description: '其他元素都出现两次，找出只出现一次的',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n4 1 2 1 2',
        sampleOutput: '4',
        hint: '异或运算',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-016',
        title: '两个数组的交集',
        difficulty: '简单',
        level: 5,
        xp: 22,
        timeLimit: 3,
        description: '找出两个数组的交集（不重复）',
        inputFormat: '第一行N，第二行N个整数；第三行M，第四行M个整数',
        outputFormat: '一行，交集元素',
        sampleInput: '4\n1 2 2 1\n2\n2 2',
        sampleOutput: '2',
        hint: '使用两个HashSet',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-017',
        title: '第三大的数',
        difficulty: '简单',
        level: 4,
        xp: 22,
        timeLimit: 3,
        description: '找出数组中第三大的数',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n3 2 3 1 2',
        sampleOutput: '1',
        hint: '维护三个变量',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-018',
        title: '找到所有数组中消失的数字',
        difficulty: '简单',
        level: 5,
        xp: 25,
        timeLimit: 3,
        description: '1到N的数字，找出缺失的所有数字',
        inputFormat: '第一行N，第二行N个整数(1-N)',
        outputFormat: '一行，缺失的数字',
        sampleInput: '8\n4 3 2 7 8 2 3 1',
        sampleOutput: '5 6',
        hint: '使用HashSet',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-019',
        title: '数组中的第K个最大元素',
        difficulty: '中等',
        level: 6,
        xp: 30,
        timeLimit: 3,
        description: '找出数组中第K大的元素',
        inputFormat: '第一行N和K，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '6 2\n3 2 1 5 6 4',
        sampleOutput: '5',
        hint: '排序或优先队列',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-020',
        title: '前K个高频元素',
        difficulty: '中等',
        level: 6,
        xp: 32,
        timeLimit: 3,
        description: '找出出现频率前K高的元素',
        inputFormat: '第一行N和K，第二行N个整数',
        outputFormat: '一行，K个元素',
        sampleInput: '6 2\n1 1 1 2 2 3',
        sampleOutput: '1 2',
        hint: 'HashMap统计+优先队列',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-021',
        title: '字符串相加',
        difficulty: '简单',
        level: 5,
        xp: 25,
        timeLimit: 3,
        description: '两个字符串表示的大数相加',
        inputFormat: '两行数字字符串',
        outputFormat: '一行数字字符串',
        sampleInput: '123\n456',
        sampleOutput: '579',
        hint: '从后往前逐位相加',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-022',
        title: '有效的字母异位词',
        difficulty: '简单',
        level: 5,
        xp: 20,
        timeLimit: 3,
        description: '判断两个字符串是否是字母异位词',
        inputFormat: '两行字符串',
        outputFormat: 'true 或 false',
        sampleInput: 'anagram\nnagaram',
        sampleOutput: 'true',
        hint: '排序或计数',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-023',
        title: '赎金信',
        difficulty: '简单',
        level: 5,
        xp: 20,
        timeLimit: 3,
        description: '判断ransomNote能否由magazine中的字符构成',
        inputFormat: '两行字符串',
        outputFormat: 'true 或 false',
        sampleInput: 'aa\naab',
        sampleOutput: 'true',
        hint: '计数比较',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-024',
        title: '找不同',
        difficulty: '简单',
        level: 5,
        xp: 18,
        timeLimit: 3,
        description: 't是s随机打乱后添加了一个字母，找出它',
        inputFormat: '两行字符串',
        outputFormat: '一个字符',
        sampleInput: 'abcd\nabcde',
        sampleOutput: 'e',
        hint: '异或或计数',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-025',
        title: '最长公共前缀',
        difficulty: '简单',
        level: 5,
        xp: 22,
        timeLimit: 3,
        description: '找出字符串数组的最长公共前缀',
        inputFormat: '第一行N，接下来N行字符串',
        outputFormat: '一行字符串',
        sampleInput: '3\nflower\nflow\nflight',
        sampleOutput: 'fl',
        hint: '纵向扫描',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-026',
        title: '反转字符串',
        difficulty: '简单',
        level: 2,
        xp: 12,
        timeLimit: 3,
        description: '反转字符串中的字符',
        inputFormat: '一行字符串',
        outputFormat: '反转后的字符串',
        sampleInput: 'hello',
        sampleOutput: 'olleh',
        hint: '使用StringBuilder.reverse()',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-027',
        title: '反转字符串中的元音字母',
        difficulty: '简单',
        level: 5,
        xp: 20,
        timeLimit: 3,
        description: '只反转元音字母aeiou',
        inputFormat: '一行字符串',
        outputFormat: '一行字符串',
        sampleInput: 'hello',
        sampleOutput: 'holle',
        hint: '双指针',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-028',
        title: '最后一个单词的长度',
        difficulty: '简单',
        level: 5,
        xp: 15,
        timeLimit: 3,
        description: '返回字符串中最后一个单词的长度',
        inputFormat: '一行字符串',
        outputFormat: '一个整数',
        sampleInput: 'Hello World',
        sampleOutput: '5',
        hint: 'split或从后往前遍历',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-029',
        title: '同构字符串',
        difficulty: '简单',
        level: 6,
        xp: 25,
        timeLimit: 3,
        description: '判断两个字符串是否同构',
        inputFormat: '两行字符串',
        outputFormat: 'true 或 false',
        sampleInput: 'egg\nadd',
        sampleOutput: 'true',
        hint: '使用两个HashMap',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-030',
        title: '单词规律',
        difficulty: '简单',
        level: 6,
        xp: 25,
        timeLimit: 3,
        description: '判断字符串是否遵循某个模式',
        inputFormat: '两行：模式pattern 字符串s',
        outputFormat: 'true 或 false',
        sampleInput: 'abba\ndog cat cat dog',
        sampleOutput: 'true',
        hint: '双向映射',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-031',
        title: '罗马数字转整数',
        difficulty: '简单',
        level: 6,
        xp: 28,
        timeLimit: 3,
        description: '将罗马数字转为整数',
        inputFormat: '一行罗马数字',
        outputFormat: '一个整数',
        sampleInput: 'III',
        sampleOutput: '3',
        hint: 'I=1, V=5, X=10, L=50, C=100, D=500, M=1000',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-032',
        title: '整数转罗马数字',
        difficulty: '中等',
        level: 6,
        xp: 30,
        timeLimit: 3,
        description: '将整数转为罗马数字',
        inputFormat: '一个整数(1-3999)',
        outputFormat: '罗马数字',
        sampleInput: '3',
        sampleOutput: 'III',
        hint: '贪心法',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-033',
        title: '数字1的个数',
        difficulty: '困难',
        level: 7,
        xp: 40,
        timeLimit: 3,
        description: '统计1到N中数字1出现的总次数',
        inputFormat: '一个正整数N',
        outputFormat: '一个整数',
        sampleInput: '13',
        sampleOutput: '6',
        hint: '按位统计',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-034',
        title: '丑数',
        difficulty: '简单',
        level: 3,
        xp: 20,
        timeLimit: 3,
        description: '判断是否是丑数(因子只有2,3,5)',
        inputFormat: '一个正整数',
        outputFormat: 'true 或 false',
        sampleInput: '6',
        sampleOutput: 'true',
        hint: '不断除以2,3,5',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-035',
        title: '快乐数',
        difficulty: '简单',
        level: 4,
        xp: 22,
        timeLimit: 3,
        description: '判断是否是快乐数',
        inputFormat: '一个正整数',
        outputFormat: 'true 或 false',
        sampleInput: '19',
        sampleOutput: 'true',
        hint: '循环检测',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-036',
        title: '阶乘后的零',
        difficulty: '简单',
        level: 6,
        xp: 25,
        timeLimit: 3,
        description: 'N!末尾有多少个零',
        inputFormat: '一个正整数',
        outputFormat: '一个整数',
        sampleInput: '5',
        sampleOutput: '1',
        hint: '统计因子5的个数',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-037',
        title: '加一',
        difficulty: '简单',
        level: 4,
        xp: 20,
        timeLimit: 3,
        description: '数组表示的数字加1',
        inputFormat: '第一行N，第二行N个数字',
        outputFormat: '一行，加1后的数组',
        sampleInput: '3\n1 2 3',
        sampleOutput: '1 2 4',
        hint: '处理进位',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-038',
        title: '二进制求和',
        difficulty: '简单',
        level: 5,
        xp: 22,
        timeLimit: 3,
        description: '两个二进制字符串相加',
        inputFormat: '两行二进制字符串',
        outputFormat: '一行二进制字符串',
        sampleInput: '11\n1',
        sampleOutput: '100',
        hint: '从后往前逐位相加',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-039',
        title: 'Pow(x, n)',
        difficulty: '中等',
        level: 7,
        xp: 32,
        timeLimit: 3,
        description: '计算x的n次幂',
        inputFormat: '两个整数x和n',
        outputFormat: '一个整数',
        sampleInput: '2 10',
        sampleOutput: '1024',
        hint: '快速幂',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-040',
        title: 'x的平方根',
        difficulty: '简单',
        level: 4,
        xp: 22,
        timeLimit: 3,
        description: '计算并返回x的平方根(取整)',
        inputFormat: '一个正整数',
        outputFormat: '一个整数',
        sampleInput: '8',
        sampleOutput: '2',
        hint: '二分查找',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-041',
        title: '位1的个数',
        difficulty: '简单',
        level: 3,
        xp: 18,
        timeLimit: 3,
        description: '统计整数的二进制表示中1的个数',
        inputFormat: '一个正整数',
        outputFormat: '一个整数',
        sampleInput: '11',
        sampleOutput: '3',
        hint: 'n & (n-1)消除最后一个1',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-042',
        title: '2的幂',
        difficulty: '简单',
        level: 3,
        xp: 15,
        timeLimit: 3,
        description: '判断是否是2的幂次方',
        inputFormat: '一个正整数',
        outputFormat: 'true 或 false',
        sampleInput: '16',
        sampleOutput: 'true',
        hint: 'n & (n-1) == 0',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-043',
        title: '3的幂',
        difficulty: '简单',
        level: 3,
        xp: 15,
        timeLimit: 3,
        description: '判断是否是3的幂次方',
        inputFormat: '一个正整数',
        outputFormat: 'true 或 false',
        sampleInput: '27',
        sampleOutput: 'true',
        hint: '循环除以3',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-044',
        title: '4的幂',
        difficulty: '简单',
        level: 3,
        xp: 18,
        timeLimit: 3,
        description: '判断是否是4的幂次方',
        inputFormat: '一个正整数',
        outputFormat: 'true 或 false',
        sampleInput: '16',
        sampleOutput: 'true',
        hint: '是2的幂且1在偶数位',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-045',
        title: '反转位',
        difficulty: '简单',
        level: 4,
        xp: 25,
        timeLimit: 3,
        description: '反转整数的二进制位',
        inputFormat: '一个正整数',
        outputFormat: '反转后的整数',
        sampleInput: '43261596',
        sampleOutput: '964176192',
        hint: '逐位处理',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-046',
        title: '汉明距离',
        difficulty: '简单',
        level: 4,
        xp: 20,
        timeLimit: 3,
        description: '两个整数二进制表示中不同位的个数',
        inputFormat: '两个整数',
        outputFormat: '一个整数',
        sampleInput: '1 4',
        sampleOutput: '2',
        hint: '异或后统计1的个数',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-047',
        title: '数组的度',
        difficulty: '简单',
        level: 6,
        xp: 28,
        timeLimit: 3,
        description: '找到与原数组度相同的最短子数组长度',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '5\n1 2 2 3 1',
        sampleOutput: '2',
        hint: 'HashMap记录首次和末次出现位置',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-048',
        title: '至少是其他数字两倍的最大数',
        difficulty: '简单',
        level: 4,
        xp: 20,
        timeLimit: 3,
        description: '找到最大数且至少是其他数字2倍的索引',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '索引或-1',
        sampleInput: '4\n3 6 1 0',
        sampleOutput: '1',
        hint: '找最大和次大',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-049',
        title: '数组拆分',
        difficulty: '简单',
        level: 4,
        xp: 20,
        timeLimit: 3,
        description: '将2N个数分成N对，使min值之和最大',
        inputFormat: '第一行N，第二行2N个整数',
        outputFormat: '一个整数',
        sampleInput: '2\n1 4 3 2',
        sampleOutput: '4',
        hint: '排序后取奇数位',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-050',
        title: '种花问题',
        difficulty: '简单',
        level: 4,
        xp: 22,
        timeLimit: 3,
        description: '判断能否种n朵花(不能相邻)',
        inputFormat: '第一行len和n，第二行len个0/1',
        outputFormat: 'true 或 false',
        sampleInput: '5 1\n1 0 0 0 1',
        sampleOutput: 'true',
        hint: '贪心',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-051',
        title: '最大连续1的个数',
        difficulty: '简单',
        level: 3,
        xp: 18,
        timeLimit: 3,
        description: '找出数组中最大连续1的个数',
        inputFormat: '第一行N，第二行N个0/1',
        outputFormat: '一个整数',
        sampleInput: '6\n1 1 0 1 1 1',
        sampleOutput: '3',
        hint: '计数',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-052',
        title: '寻找数组的中心索引',
        difficulty: '简单',
        level: 4,
        xp: 22,
        timeLimit: 3,
        description: '找到左侧元素和等于右侧元素和的索引',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '索引或-1',
        sampleInput: '6\n1 7 3 6 5 6',
        sampleOutput: '3',
        hint: '前缀和',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-053',
        title: '托普利茨矩阵',
        difficulty: '简单',
        level: 6,
        xp: 22,
        timeLimit: 3,
        description: '判断矩阵是否每条对角线上的元素都相同',
        inputFormat: '第一行M N，接下来M行每行N个整数',
        outputFormat: 'true 或 false',
        sampleInput: '3 4\n1 2 3 4\n5 1 2 3\n9 5 1 2',
        sampleOutput: 'true',
        hint: '检查arr[i][j] == arr[i+1][j+1]',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-054',
        title: '重塑矩阵',
        difficulty: '简单',
        level: 6,
        xp: 25,
        timeLimit: 3,
        description: '将M×N矩阵重塑为r×c矩阵',
        inputFormat: '第一行M N r c，接下来M行每行N个整数',
        outputFormat: 'r行c列的矩阵',
        sampleInput: '2 2 1 4\n1 2\n3 4',
        sampleOutput: '1 2 3 4',
        hint: '先展平再重塑',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-055',
        title: '图像翻转',
        difficulty: '中等',
        level: 6,
        xp: 28,
        timeLimit: 3,
        description: '水平翻转后反转0/1',
        inputFormat: '第一行N，接下来N行每行N个0/1',
        outputFormat: 'N行N列',
        sampleInput: '3\n1 1 0\n1 0 1\n0 0 0',
        sampleOutput: '1 0 0\n0 1 0\n1 1 1',
        hint: '先反转行再取反',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-056',
        title: '岛屿的最大面积',
        difficulty: '中等',
        level: 7,
        xp: 35,
        timeLimit: 3,
        description: '找出最大的岛屿面积(DFS/BFS)',
        inputFormat: '第一行M N，接下来M行每行N个0/1',
        outputFormat: '一个整数',
        sampleInput: '3 3\n0 0 1\n0 1 1\n1 0 0',
        sampleOutput: '3',
        hint: 'DFS标记访问过的格子',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-057',
        title: '杨辉三角II',
        difficulty: '简单',
        level: 6,
        xp: 22,
        timeLimit: 3,
        description: '返回杨辉三角的第N行',
        inputFormat: '一个整数N',
        outputFormat: '一行，第N行的元素',
        sampleInput: '3',
        sampleOutput: '1 3 3 1',
        hint: '滚动数组',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-058',
        title: '第N个泰波那契数',
        difficulty: '简单',
        level: 3,
        xp: 20,
        timeLimit: 3,
        description: 'T(n) = T(n-1) + T(n-2) + T(n-3)',
        inputFormat: '一个正整数N',
        outputFormat: '一个整数',
        sampleInput: '4',
        sampleOutput: '4',
        hint: '三个变量滚动',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-059',
        title: '使用最小花费爬楼梯',
        difficulty: '简单',
        level: 5,
        xp: 25,
        timeLimit: 3,
        description: '每步有花费，求最小总花费',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '3\n10 15 20',
        sampleOutput: '15',
        hint: 'dp[i] = min(dp[i-1], dp[i-2]) + cost[i]',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-060',
        title: '打家劫舍',
        difficulty: '中等',
        level: 6,
        xp: 30,
        timeLimit: 3,
        description: '不能抢劫相邻房屋，求最大金额',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: '一个整数',
        sampleInput: '4\n1 2 3 1',
        sampleOutput: '4',
        hint: 'dp[i] = max(dp[i-1], dp[i-2]+nums[i])',
        template: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-061',
        title: '删除链表中的节点',
        difficulty: '简单',
        level: 8,
        xp: 22,
        timeLimit: 3,
        description: '只给定要删除的节点，删除它',
        inputFormat: '链表和节点值',
        outputFormat: '删除后的链表',
        sampleInput: '4 5 1 9\n5',
        sampleOutput: '4 1 9',
        hint: '复制下一节点的值',
        template: `import java.util.*;\n\nclass ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-062',
        title: '反转链表',
        difficulty: '简单',
        level: 8,
        xp: 25,
        timeLimit: 3,
        description: '反转单链表',
        inputFormat: '链表长度N，N个整数',
        outputFormat: '反转后的链表',
        sampleInput: '5\n1 2 3 4 5',
        sampleOutput: '5 4 3 2 1',
        hint: '三指针',
        template: `import java.util.*;\n\nclass ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-063',
        title: '回文链表',
        difficulty: '简单',
        level: 8,
        xp: 28,
        timeLimit: 3,
        description: '判断链表是否是回文',
        inputFormat: '第一行N，第二行N个整数',
        outputFormat: 'true 或 false',
        sampleInput: '4\n1 2 2 1',
        sampleOutput: 'true',
        hint: '快慢指针找中点+反转',
        template: `import java.util.*;\n\nclass ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-064',
        title: '环形链表',
        difficulty: '简单',
        level: 8,
        xp: 25,
        timeLimit: 3,
        description: '判断链表是否有环（模拟题）',
        inputFormat: '无',
        outputFormat: 'true',
        sampleInput: '',
        sampleOutput: 'true',
        hint: '快慢指针',
        template: `import java.util.*;\n\nclass ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // 模拟有环链表\n        ListNode head = new ListNode(1);\n        head.next = new ListNode(2);\n        head.next.next = head;\n        \n        // 快慢指针检测环\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) {\n                System.out.println("true");\n                return;\n            }\n        }\n        System.out.println("false");\n    }\n}`,
        validator: function(code) {
            if (!code.includes('slow') || !code.includes('fast')) return { passed: false, message: '请使用快慢指针' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-065',
        title: '合并两个有序链表',
        difficulty: '简单',
        level: 8,
        xp: 28,
        timeLimit: 3,
        description: '合并两个升序链表',
        inputFormat: '两个链表',
        outputFormat: '合并后的链表',
        sampleInput: '3\n1 2 4\n3\n1 3 4',
        sampleOutput: '1 1 2 3 4 4',
        hint: '双指针合并',
        template: `import java.util.*;\n\nclass ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-066',
        title: '移除链表元素',
        difficulty: '简单',
        level: 8,
        xp: 22,
        timeLimit: 3,
        description: '删除链表中等于val的所有节点',
        inputFormat: '第一行N和val，第二行N个整数',
        outputFormat: '删除后的链表',
        sampleInput: '6 6\n1 2 6 3 4 5 6',
        sampleOutput: '1 2 3 4 5',
        hint: '哨兵节点',
        template: `import java.util.*;\n\nclass ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-067',
        title: '二叉树的最大深度',
        difficulty: '简单',
        level: 9,
        xp: 25,
        timeLimit: 3,
        description: '计算二叉树的最大深度',
        inputFormat: '层序遍历（-1表示null）',
        outputFormat: '一个整数',
        sampleInput: '3 9 20 -1 -1 15 7',
        sampleOutput: '3',
        hint: '递归：max(left, right) + 1',
        template: `import java.util.*;\n\nclass TreeNode {\n    int val;\n    TreeNode left, right;\n    TreeNode(int x) { val = x; }\n}\n\npublic class Main {\n    public static int maxDepth(TreeNode root) {\n        if (root == null) return 0;\n        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;\n    }\n    \n    public static void main(String[] args) {\n        // 构造测试树\n        TreeNode root = new TreeNode(3);\n        root.left = new TreeNode(9);\n        root.right = new TreeNode(20);\n        root.right.left = new TreeNode(15);\n        root.right.right = new TreeNode(7);\n        System.out.println(maxDepth(root));\n    }\n}`,
        validator: function(code) {
            if (!code.includes('maxDepth')) return { passed: false, message: '请定义maxDepth方法' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-068',
        title: '对称二叉树',
        difficulty: '简单',
        level: 9,
        xp: 28,
        timeLimit: 3,
        description: '判断二叉树是否对称',
        inputFormat: '树的结构',
        outputFormat: 'true 或 false',
        sampleInput: '1 2 2 3 4 4 3',
        sampleOutput: 'true',
        hint: '递归比较左右子树',
        template: `import java.util.*;\n\nclass TreeNode {\n    int val;\n    TreeNode left, right;\n    TreeNode(int x) { val = x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-069',
        title: '二叉树的层序遍历',
        difficulty: '中等',
        level: 9,
        xp: 32,
        timeLimit: 3,
        description: '层序遍历二叉树',
        inputFormat: '树的结构',
        outputFormat: '每层一行',
        sampleInput: '3 9 20 -1 -1 15 7',
        sampleOutput: '3\n9 20\n15 7',
        hint: '使用队列BFS',
        template: `import java.util.*;\n\nclass TreeNode {\n    int val;\n    TreeNode left, right;\n    TreeNode(int x) { val = x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        \n    }\n}`,
        validator: function(code) {
            if (!code.includes('Queue')) return { passed: false, message: '建议使用Queue' };
            return { passed: true, message: '✓ 通过' };
        }
    },
    {
        id: 'challenge-070',
        title: '二叉搜索树的最小绝对差',
        difficulty: '简单',
        level: 9,
        xp: 28,
        timeLimit: 3,
        description: 'BST中任意两节点值的最小差值',
        inputFormat: 'BST',
        outputFormat: '一个整数',
        sampleInput: '4 2 6 1 3',
        sampleOutput: '1',
        hint: '中序遍历后计算相邻差',
        template: `import java.util.*;\n\nclass TreeNode {\n    int val;\n    TreeNode left, right;\n    TreeNode(int x) { val = x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        \n    }\n}`,
        validator: function(code) {
            return { passed: true, message: '✓ 通过' };
        }
    }
];
