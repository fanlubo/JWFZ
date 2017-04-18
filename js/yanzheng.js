$().ready(function() {
		// 在键盘按下并释放及提交后验证提交表单
		  $("#signupForm").validate({
		    rules: {
		   	 username: {
		        required: true,
		        minlength: 10
		      },
		      password: {
		        required: true,
		        minlength: 6
		      },
		      confirm_password: {
		        required: true,
		        minlength: 6,
		        equalTo: "#password"
		      },
		       name:{
		      	required:true,
		      	minlength: 2,
		      	maxlength:5
		      },
		       email: {
		        required: true,
		        email: true
		      },
		      phone: {
	            required: true,
	            minlength: 11,
	            isMobile: true
        },	   
		    },
		    messages: {
		     username: {
		        required: "请输入学号",
		        minlength: "学号长度不能小于10个长度"
		      },
		      password: {
		        required: "请输入密码",
		        minlength: "密码长度不能小于 6 个字符"
		      },
		      confirm_password: {
		        required: "请确认密码",
		        minlength: "密码长度不能小于 6 个字符",
		        equalTo: "两次密码输入不一致"
		      },
		      name:{
		      	required:"请输入您的姓名",
		      	minlength: "姓名不能小于2个字符",
		      	maxlength:"姓名不能大于5个字符"
		      },
		      email: {
		        required: "请输入邮箱",
		        email:"邮箱格式不正确"
		      },
		       phone: {
	            required: "请输入手机号",
	            minlength: "确认手机不能小于11个字符",
	            isMobile: "请正确填写您的手机号码"
      		  },
		    }
		});
		  });
		  
			function Liandong(obj){
			var val = obj.value;
			if(val == '国际教育学院'){
				var sec = document.getElementById('second');
				sec.innerHTML = "<option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option>";	
			}
			if(val == '信息工程学院'){
				var sec = document.getElementById('second');
				sec.innerHTML = "<option>计科</option><option>树莓</option><option>物联网</option><option>网工</option>";	
			}if(val == '==请选择=='){
				var sec = document.getElementById('second');
				sec.innerHTML = "<option>==请选择==</option>";	
			}
		}
		 jQuery.validator.addMethod("isMobile", function(value, element) { 
			  var length = value.length; 
			  var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/; 
			  return this.optional(element) || (length == 11 && mobile.test(value)); 
			}, "请正确填写您的手机号码"); 