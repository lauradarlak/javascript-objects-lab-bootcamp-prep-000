var recipes = {foo: 'bar'};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  
  return object;
  
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  
  return object;
}

function deleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}

function deleteFromObjectByKey(object, key){
  var obj = { key: 'value' };
  var newObj = Object.assign({}, obj);
  
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object
}