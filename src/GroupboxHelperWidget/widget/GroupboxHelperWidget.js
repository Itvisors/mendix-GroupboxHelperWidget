/*jslint browser:true, nomen: true */
/*global mendix, mx, mxui, define, require, console, logger, alert */
/**
	GroupboxHelperWidget
	========================

	@file      : GroupboxHelperWidget.js
	@version   : 2.0
	@author    : Marcel Groeneweg
	@date      : 24-4-2017
	@copyright : ITvisors
	@license   : Apache License, Version 2.0, January 2004

	Documentation
	=============
	Groupbox helper. This widget finds its previous sibling in the DOM tree and moves it to the header of the groupbox.

*/
define([
  "dojo/_base/declare",
  "mxui/widget/_WidgetBase",
  "dojo/dom-class",
  "dojo/dom-construct"
], function (declare, _WidgetBase, domClass, domConstruct) {
  "use strict";

  // Declare widget.
  return declare(
    "GroupboxHelperWidget.widget.GroupboxHelperWidget",
    [_WidgetBase],
    {
      postCreate: function () {
        var thisObj = this;

        setTimeout(function () {
          //            console.log("GroupboxHelperWidget: moveSiblingElement");
          var headerContainerTable,
            headerContainerTableRow,
            headerContainerLeftTd,
            headerContainerRightTd,
            headerNode,
            headerIconNode,
            node = thisObj.domNode.parentNode,
            nodeToMove = thisObj.domNode.previousElementSibling;
          if (nodeToMove.nodeName === "SCRIPT") {
            nodeToMove = nodeToMove.previousElementSibling;
          }

          if (nodeToMove) {
            if (domClass.contains(node, "mx-groupbox-body")) {
              if (node.previousElementSibling) {
                headerNode = node.previousElementSibling;
                if (domClass.contains(headerNode, "mx-groupbox-header")) {
                  if (thisObj.attributeValue && thisObj.attributeValue !== "") {
                    nodeToMove.setAttribute(
                      "cssSelectorHelper",
                      thisObj.attributeValue
                    );
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
                  domConstruct.place(headerContainerTable, headerNode, "only");
                  headerContainerRightTd.appendChild(headerIconNode);
                  if (thisObj.attributeValue && thisObj.attributeValue !== "") {
                    nodeToMove.setAttribute(
                      "cssSelectorHelper",
                      thisObj.attributeValue
                    );
                    headerContainerTable.setAttribute(
                      "cssSelectorHelper",
                      thisObj.attributeValue + "Table"
                    );
                  }
                } else {
                  console.warn(
                    "GroupboxHelperWidget: Groupbox header not found"
                  );
                }
              } else {
                console.warn(
                  "GroupboxHelperWidget: No previous sibling found for groupbox body"
                );
              }
            } else {
              console.warn("GroupboxHelperWidget: Parent is not a groupbox");
            }
          } else {
            console.warn("GroupboxHelperWidget: No previous sibling found");
          }
        }, 100);
      }
    }
  );
});

require(["GroupboxHelperWidget/widget/GroupboxHelperWidget"]);
