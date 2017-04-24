#GroupBoxHelperWidget

##Description
Move another element into the header of a groupbox

####As of Mendix 5.19.0 the groupbox allows dynamic content in the header so you may not need this widget anymore.

##Typical usage scenario
- Show attribute data in the group box caption rather than a fixed value.

##Features and limitations
- Put anything in the groupbox header
- Apply individual stying to the element in the groupbox header
 
##Installation
Normal App Store installation

##Dependencies
- Mendix 6.10.2 Environment
 
##Configuration
The order in which to put the elements in the group box:

- The element to put in the header, usually an individual element or a table 
- This widget
- Other elements, which will remain in the group box body.

##Properties

Attribute value. Use this to apply custom styling to the element.
 
##Styling
The widget will put an additional attribute on the element that is moved.

Example: Attribute value property = mygroupbox

When you put a table in the header the following can be used to style the table:

table[cssselectorhelper=mygroupbox]

 
To keep the expand/collapse button in place, the widget inserts a table in the groupbox header to contain the data and the expand/collapse button. This table may be styled using:

table[cssselectorhelper=mygroupboxTable]

 