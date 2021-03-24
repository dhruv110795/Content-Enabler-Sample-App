var JSON = "";

fetch("../site.json")
.then(res => res.json())
.then(data => {
    JSON  = data
    displayContent(JSON);
})
.catch(err => console.error(err));

var who={}, what = {}, tabs=[];
var title = "";

function videoContentDisplay(item){
    if (item){
        for(var j=0;j<item.length;j++){
            video_title = item[j];
            title += `<div class="col-md-4">
                        <img style="height: 200px;" src="./images/image-1.jpg">
                        <span class="text-styler">${video_title.title}</span>
                    </div>`
        }
        $("#content_image").prepend(title);
    }
}

function tabContentDisplay(list){
    if(list){
        for(var i=0;i<list.length;i++){
            list_data = list[0]
        }
        item = list_data.items;
        list_data = `<div class="header">
                        <span>${list_data.name}</span>
                    </div>`
        $("#who_concept").prepend(list_data);
        videoContentDisplay(item);
    }
}

function sideTabDisplayContent(tab){
    if(tab){
        for(var i=0;i<tab.length;i++){
            content = tab[0]
        }
        tabContent = ` <li class="nav-item" id="${content.id}" style="padding: 15px; border-bottom: 1px solid #3333;">
                        <span class="nav-link active side-nav" style="padding-left: 0; font-size: 30px;">${content.name}</span>
                    </li>`
        $("#who_tabs").append(tabContent);
        tabContentDisplay(content.list);
    }
}

function whoDisplayContent(who){
    if(who){
        id = who.id;
        tabs = who.tabs;
        console.log(tabs)
        sideTabDisplayContent(who.tabs);
    }
}

function displayContent(JSON){
    for(var i=0;i< JSON.length;i++){
        who = JSON[0];
    }
    whoDisplayContent(who);

}


    



