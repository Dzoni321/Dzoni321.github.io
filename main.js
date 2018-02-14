var id = 1;
var newTaskBlanco = document.getElementById('newTaskDiv');

function addnewTaskButton(){
//createnewTaskButton
	var newTaskButton = document.createElement('button');
	newTaskButton.classList.add('btn','btn-info','btn-block');
	newTaskButton.setAttribute('type', 'button');
	newTaskButton.innerHTML = 'Louie '+id;
	//date
	//...quick info

//ButtonGroupDiv
	var buttonGroupDiv = document.createElement('div');
	buttonGroupDiv.classList.add('btn-group','btn-group-justified');
		//create RemoveButton
			var removeButton = document.createElement('a');
			//removeButton.setAttribute('type', 'button');
			removeButton.classList.add('btn','btn-primary');
			removeButton.innerHTML = 'Remove Task';
			removeButton.addEventListener("click", function(){
				var thisParent = this.parentNode.parentNode.parentNode;
				document.getElementById('mainTaskList').removeChild(thisParent);				
			});

		//create SaveButton
			var saveButton = document.createElement('a');
			saveButton.innerHTML = 'Save';
			saveButton.classList.add('btn','btn-primary');
	
		//create ExecuteNowButton
			var executeNowButton = document.createElement('a');
			executeNowButton.innerHTML = 'Execute Now';	
			executeNowButton.classList.add('btn','btn-primary');
	
	buttonGroupDiv.appendChild(saveButton);
	buttonGroupDiv.appendChild(executeNowButton);
	buttonGroupDiv.appendChild(removeButton);
	
//create innerLeftDiv	
	var leftDiv = document.createElement('div');
	leftDiv.classList.add('links');
	leftDiv.innerHTML = '<h4>JSON-Script</h4>';	
	//TaskCode
		var taskCode = document.createElement('pre');
		taskCode.classList.add('jsonInput')
		taskCode.innerHTML = "MongoTaskCode im JSON Format";
		leftDiv.appendChild(taskCode);
			
//create innerRightDiv
	var rightDiv = document.createElement('div');
	rightDiv.classList.add('rechts');
	rightDiv.innerHTML = '<h4>Settings</h4>';
	
	//create obenDiv
		var obenDiv = document.createElement('div');
		obenDiv.innerHTML = '<h4></h4>';
		rightDiv.appendChild(obenDiv);
	
		//checkBoxes
			//Manuel
				var checkBoxManuel = document.createElement('input');
				checkBoxManuel.type = 'checkbox';
				obenDiv.appendChild(checkBoxManuel);
				var manuel = document.createElement('lable');
				manuel.innerHTML = 'Manuel';
				obenDiv.appendChild(manuel);
			//Immer
				var checkBoxImmer = document.createElement('input');
				checkBoxImmer.type = 'checkbox';
				obenDiv.appendChild(checkBoxImmer);
				var immer = document.createElement('lable');
				immer.innerHTML = 'Immer';
				obenDiv.appendChild(immer);
			//cron Job
				var checkBoxCronJob = document.createElement('input');
				checkBoxCronJob.type = 'checkbox';
				obenDiv.appendChild(checkBoxCronJob);
				var cron = document.createElement('lable');
				cron.innerHTML = 'Cron Job';
				obenDiv.appendChild(cron);

		// Eintrag in den Crontables
			var cronJobInput = document.createElement('input');
			cronJobInput.type = 'text';
			obenDiv.appendChild(cronJobInput);

	//create untenDiv
		var untenDiv = document.createElement('div');
		untenDiv.innerHTML = '<h4>Execute-Code</h4>';
		
	
		//ActionsListe
			var actionList = document.createElement('ul');
			actionList.setAttribute('id','list');
			actionList.innerHTML = '<h5>ActionList</h5>';
			untenDiv.appendChild(actionList);
			
		//ExitCode
			var exitCode = document.createElement('input');
			exitCode.type = 'number';
			exitCode.name = 'exitCode';
			exitCode.value= '0';
			untenDiv.appendChild(exitCode);
		//Selection	
			var selection = document.createElement('select');
			//Reboot
				var reboot = document.createElement('option');
				reboot.innerHTML = 'reboot';
				selection.appendChild(reboot);
			//Shutdown
				var shutdown = document.createElement('option');
				shutdown.innerHTML = 'shutdown';
				selection.appendChild(shutdown);
			//tg-message
				var tgMessage = document.createElement('option');
				tgMessage.innerHTML = 'tg-Message';
				selection.appendChild(tgMessage);
			
			untenDiv.appendChild(selection);	
		//Add Button
			var addButton = document.createElement('button');
			addButton.type = 'button';
			addButton.innerHTML = 'Add';
			addButton.addEventListener("click", function(){ 
			//create ActionListElement (ExitCode+Action+DeleteActionButton)
				var x = document.createElement('button');
				x.type='button';
				x.innerHTML ='x';
				x.addEventListener("click", function() {
					var thisParent = this.parentNode;
					var thatParent = thisParent.parentNode;
					thatParent.removeChild(thisParent);
				});
				var eCode = exitCode.value;
				//new ListElement
				var liElement = document.createElement('li');
				liElement.innerHTML = eCode+': '+selection.options[selection.selectedIndex].text;
				liElement.appendChild(x);
				actionList.appendChild(liElement);
			});
			
			untenDiv.appendChild(addButton);
			rightDiv.appendChild(untenDiv);
			
		
		
//create innerMainDiv
	var innerMainDiv = document.createElement('div');
	innerMainDiv.appendChild(leftDiv);
	innerMainDiv.appendChild(rightDiv);
	innerMainDiv.appendChild(buttonGroupDiv);
	innerMainDiv.classList.add('collapse');
	innerMainDiv.setAttribute('id', 'content'+id);
//create divTask mainDivChild
	
	
	divTask.appendChild(newTaskButton);
	divTask.appendChild(innerMainDiv);
	divTask.setAttribute('id','mongo'+id);
	newTaskButton.setAttribute('data-toggle','collapse');
    newTaskButton.setAttribute('data-target','#content'+id);
	document.getElementById('mainTaskList').appendChild(divTask);
	
	var t = document.getElementById('task');
	t.click();
	newTaskButton.click();
	id++;
}

function openPage(pageName,elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("topNav");
    for (i = 0; i < tablinks.length; i++) {
       tablinks[i].style.backgroundColor = "";
	   tablinks[i].style.color = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "#45526e";
	elmnt.style.color = "white";

}

function newTask(){
var taskname = document.getElementById('taskname').value;	
	
	if(taskname.length==0){
		alert('Tasknamen eingeben');
		return;
	}
	
var newDiv=document.createElement('div');
var newTaskBlanko = document.getElementById('newTaskDiv')
var newTaskSettings = newTaskBlanko.cloneNode(true);
newTaskSettings.classList.add('collapse');
newTaskSettings.setAttribute('id','content'+id);
var newTaskButton = document.createElement('button');
	newTaskButton.classList.add('btn','btn-info','btn-block');
	newTaskButton.setAttribute('type', 'button');
	newTaskButton.innerHTML = taskname;
	newTaskButton.setAttribute('data-toggle','collapse');
    newTaskButton.setAttribute('data-target','#content'+id);

	var buttonGroupDiv = document.createElement('div');
	buttonGroupDiv.classList.add('btn-group', 'col-sm-12');
	
	var saveButton = document.createElement('button');
	saveButton.setAttribute('type','button');
	saveButton.innerHTML = 'Save';
	saveButton.classList.add('btn','btn-primary');
	//saveButton.addEventListener("click", function() {
var executeNowButton = document.createElement('button');
	executeNowButton.setAttribute('type','button');
	executeNowButton.classList.add('btn','btn-primary');
	executeNowButton.innerHTML = 'Execute Now';
	//executeNowButton.addEventListener("click", function() {
var deleteTaskButton = document.createElement('button');
	deleteTaskButton.setAttribute('type','button');
	deleteTaskButton.classList.add('btn','btn-primary');
	deleteTaskButton.innerHTML = 'Delete';
	deleteTaskButton.addEventListener("click", function() {
		var mainDiv = this.parentNode.parentNode.parentNode.parentNode;
		var thisParent = this.parentNode.parentNode.parentNode; 
		mainDiv.removeChild(thisParent);
	});
	
	newDiv.appendChild(newTaskButton);
	buttonGroupDiv.appendChild(saveButton);
	buttonGroupDiv.appendChild(executeNowButton);
	buttonGroupDiv.appendChild(deleteTaskButton);
	newTaskSettings.appendChild(buttonGroupDiv);
	newDiv.appendChild(newTaskSettings);
	
	document.getElementById('mainTaskList').appendChild(newDiv);
	var t = document.getElementById('task');
	t.click();
	
	var btns =newTaskSettings.getElementsByClassName('removeAction');
	for(var i =0;i<btns.length;i++){
		
	btns[i].addEventListener('click',function(){
					this.parentNode.parentNode.removeChild(this.parentNode);
					
			});	
	}
	//newTaskButton.click();
	id++
}

function addAction(element){
	var actionList = element.parentNode.previousSibling.previousSibling;
	var selection = element.previousSibling.previousSibling;
	var exitCode = element.previousSibling.previousSibling.previousSibling.previousSibling.value;
	var removeButton = document.createElement('button');
	removeButton.setAttribute('class','removeAction');
	removeButton.innerHTML = 'x';
	var liElement = document.createElement('li');
	liElement.innerHTML = exitCode+': '+selection.options[selection.selectedIndex].text;
	removeButton.addEventListener('click',function(){
					this.parentNode.parentNode.removeChild(this.parentNode);
			});
	liElement.appendChild(removeButton);
	actionList.appendChild(liElement);

}


