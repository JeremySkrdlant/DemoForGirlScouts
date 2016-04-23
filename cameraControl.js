#pragma strict
var followMe:GameObject;

function Start () {

}

function Update () {
	transform.position.x = followMe.transform.position.x;
}