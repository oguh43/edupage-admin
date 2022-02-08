EdubarUtils.isAdmin = ()=>{return true};
window.addEventListener("load",()=>{
    ETestUtils.getSuperprideleniaTestu = function(testid, doneFunc) {	
        var superpridelenia = ETestUtils.getCached('superpridelenia_'+testid);
            
        if (!superpridelenia) {	    		
            $.post('/elearning/?cmd=ETestCreator&akcia=getSuperprideleniaTestu',{testids:testid}, function(pdata) {
                var data = pdata['superpridelenia'];
                superpridelenia = data?.[testid] ?? [];
                ETestUtils.setCached('superpridelenia_'+testid, data);
                
                doneFunc(superpridelenia, pdata);
                
            },'json');
        } else {
            doneFunc(superpridelenia[testid] ? superpridelenia[testid] : [], superpridelenia);
        }
    }
})