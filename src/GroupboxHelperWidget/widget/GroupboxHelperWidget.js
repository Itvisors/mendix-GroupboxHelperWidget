/**
	GroupboxHelperWidget
	========================
	
	@file      : GroupboxHelperWidget.js
	@version   : 2.0
	@author    : Marcel Groeneweg
	@date      : 08-10-2014
	@copyright : Synobsys
	@license   : Apache License, Version 2.0, January 2004
	
	Documentation
	=============
	Groupbox helper. This widget finds its previous sibling in the DOM tree and moves it to the header of the groupbox.
	
*/
dojo.provide("GroupboxHelperWidget.widget.GroupboxHelperWidget");

dojo.declare("GroupboxHelperWidget.widget.GroupboxHelperWidget", [ mxui.widget._WidgetBase ], {
    postCreate : function () {
        'use strict';

        var thisObj = this;

        setTimeout(function () {
//            console.log('GroupboxHelperWidget: moveSiblingElement');
            var
                headerContainerTable,
                headerContainerTableRow,
                headerContainerLeftTd,
                headerContainerRightTd,
                headerNode,
                headerIconNode,
                node = thisObj.domNode.parentNode,
                nodeToMove = thisObj.domNode.previousSibling;

            if (nodeToMove) {
                if (node.classList.contains("mx-groupbox-body")) {
                    if (node.previousSibling) {
                        headerNode = node.previousSibling;
                        if (headerNode.classList.contains("mx-groupbox-header")) {
                            if (thisObj.attributeValue && thisObj.attributeValue !== "") {
                                nodeToMove.setAttribute('cssSelectorHelper', thisObj.attributeValue);
                            }
                            headerIconNode = headerNode.firstChild;
                            headerContainerTable = document.createElement("table");
                            headerContainerTable.style.width = "100%";
                            headerContainerTableRow = document.createElement("tr");
                            headerContainerTable.appendChild(headerContainerTableRow);
                            headerContainerLeftTd = document.createElement("td");
                            headerContainerTableRow.appendChild(headerContainerLeftTd);
                            headerContainerRightTd = document.createElement("td");
                            headerContainerTableRow.appendChild(headerContainerRightTd);
                            headerContainerLeftTd.appendChild(nodeToMove);
                            dojo.place(headerContainerTable, headerNode, "only");
                            headerContainerRightTd.appendChild(headerIconNode);
                            if (thisObj.attributeValue && thisObj.attributeValue !== "") {
                                nodeToMove.setAttribute('cssSelectorHelper', thisObj.attributeValue);
                                headerContainerTable.setAttribute('cssSelectorHelper', thisObj.attributeValue + "Table");
                            }
                        } else {
                            console.warn('GroupboxHelperWidget: Groupbox header not found');
                        }
                    } else {
                        console.warn('GroupboxHelperWidget: No previous sibling found for groupbox body');
                    }

                } else {
                    console.warn('GroupboxHelperWidget: Parent is not a groupbox');
                }

            } else {
                console.warn('GroupboxHelperWidget: No previous sibling found');
            }

        }, 100);

    },
    uninitialize : function () {
        'use strict';
//        console.log('GroupboxHelperWidget: uninitialize');
    }
});