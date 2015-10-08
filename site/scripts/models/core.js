   $.module({
	name:'core',
	import:[$,'each','has','docs/api.js','qs'],
	invoke:function($,each,has,api,qs){
		var dictionary={};
		var methods='';
		each(api,function(item,key){
			if(key!=='display'){
				each(api[key],function(subItem,subKey){
					dictionary[subKey]=subItem;
				});
			}
		});
		$.import('/site/styles/resize.css',function(resize){
			this.read=1;
			console.log(resize);
			each($,function(item,key){
				if(!has(key,['on','eventNames'])){
					var descrip=dictionary[key] || {descrip:'',example:'',returns:''};
					methods=methods+`<h6>${key}</h6>
					<p><b>Description</b></br>${descrip.descrip}</p>
					<p><b>Example</b></br>${descrip.example}</p>
					<p><b>Returns</b></br>${descrip.returns}</p>`;
				}
			});
			$.raf(()=>{
				qs('.contentWrap').html(methods);
			});
		});
	}
});