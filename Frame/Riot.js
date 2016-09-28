#Riot.js
    Riot.js:
	Riot.js代码风格指南：
		http://www.tuicool.com/articles/U3UbIv7
		https://voorhoede.github.io/riotjs-demos/
	1..tag.html结尾
	2.命名：
		<!-- 推荐 -->
		<app-header />
		<user-list />
		<range-slider />
	3.初始化参数：
		this.items = opts.items || []; // 设置默认值为空数组
		this.step = !isNaN(Number(opts.step)) ? Number(opts.step) : 1;
	4.将 this 改名为 tag
		/* 推荐 */
		// ES5 的赋值写法
		var tag = this;
		window.onresize = function() {
		    tag.adjust();
		}
	5.在顶部声明变量
    		/* 推荐 */
    var tag = this;
    tag.text = '';
    tag.todos = [];
    tag.add = add;
    tag.edit = edit;
    tag.toggle = toggle;
    		function add(event) {
        /* ... */
    }
		
		From <http://www.tuicool.com/articles/U3UbIv7> 
	6.父子模块传值：
    		<!-- 推荐 -->
    <parent-tag>
        <child-tag value="{ value }" /> <!-- 把值传入子模块 -->
    </parent-tag>
    		<child-tag>
        <span>{ opts.value }</span> <!-- 使用父模块传入的值 -->
    </child-tag>
		
		From <http://www.tuicool.com/articles/U3UbIv7> 
	7.Riotjs中each in：
    		<!-- 推荐 -->
    <ul>
        <li each="{ item in items }">
            <label class="{ completed: item.done }">
                <input type="checkbox" checked="{ item.done }"> { item.title }
            </label>
        </li>
    </ul>
    		
		From <http://www.tuicool.com/articles/U3UbIv7> 
