(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(9)),l=n(5),i=n(2),d=n(0),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={color:"steelBlue"};var j=u,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(j,{color:c?"pink":"lightblue",text:c?"Close":"Add",onClick:n})]})};b.defaultProps={title:"Task Tracker"};var h=b,O=n(8),f=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(f,{task:e,onDelete:n,onToggle:c},e.id)}))})},x=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),u=l[0],j=l[1],b=Object(c.useState)(!1),h=Object(i.a)(b,2),O=h[0],f=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:O}),o(""),j(""),f(!1)):alert("Please add a task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Day & Time"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},k=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(i.a)(a,2),u=o[0],j=o[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(d.jsx)(x,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(l.a)({id:t},e);j([].concat(Object(s.a)(u),[n])),console.log(n)}}),u.length>0?Object(d.jsx)(m,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No tasks",Object(d.jsx)("a",{href:"https://www.instagram.com/frontendmike/?hl=en",target:"_blank",style:{color:"blue",marginTop:"1rem",display:"block"},children:"By: Frontendmike"})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.d6663ccd.chunk.js.map