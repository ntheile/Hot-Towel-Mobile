define(["durandal/system","durandal/composition","jquery","knockout"],function(e,t,n,i){function r(e,n){var r=i.utils.domData.get(e,s);r||(r={parts:t.cloneNodes(i.virtualElements.childNodes(e))},i.virtualElements.emptyNode(e),i.utils.domData.set(e,s,r)),n.parts=r.parts}var o={},a={},u=["model","view","kind"],s="durandal-widget-data",l={getSettings:function(t){var n=i.utils.unwrapObservable(t())||{};if(e.isString(n))return{kind:n};for(var r in n)n[r]=-1!=i.utils.arrayIndexOf(u,r)?i.utils.unwrapObservable(n[r]):n[r];return n},registerKind:function(e){i.bindingHandlers[e]={init:function(){return{controlsDescendantBindings:!0}},update:function(t,n,i,o,a){var u=l.getSettings(n);u.kind=e,r(t,u),l.create(t,u,a,!0)}},i.virtualElements.allowedBindings[e]=!0},mapKind:function(e,t,n){t&&(a[e]=t),n&&(o[e]=n)},mapKindToModuleId:function(e){return o[e]||l.convertKindToModulePath(e)},convertKindToModulePath:function(e){return"widgets/"+e+"/viewmodel"},mapKindToViewId:function(e){return a[e]||l.convertKindToViewPath(e)},convertKindToViewPath:function(e){return"widgets/"+e+"/view"},createCompositionSettings:function(e,t){return t.model||(t.model=this.mapKindToModuleId(t.kind)),t.view||(t.view=this.mapKindToViewId(t.kind)),t.preserveContext=!0,t.activate=!0,t.activationData=t,t.mode="templated",t},create:function(e,n,i,r){r||(n=l.getSettings(function(){return n},e));var o=l.createCompositionSettings(e,n);t.compose(e,o,i)},install:function(e){if(e.bindingName=e.bindingName||"widget",e.kinds)for(var t=e.kinds,n=0;n<t.length;n++)l.registerKind(t[n]);i.bindingHandlers[e.bindingName]={init:function(){return{controlsDescendantBindings:!0}},update:function(e,t,n,i,o){var a=l.getSettings(t);r(e,a),l.create(e,a,o,!0)}},i.virtualElements.allowedBindings[e.bindingName]=!0}};return l});