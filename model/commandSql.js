// command表操作
var command = {
	insert   : 'INSERT INTO command(name, command, ctimed) VALUES(?, ?, ?)',
	update   : "UPDATE command SET name='更新内容', command='更新命令' WHERE id=?",
	delete   : "DELETE FROM command WHERE id=?",
	queryById: "SELECT * FROM command WHERE id=?",
	queryAll : "SELECT * FROM command"
};

module.exports = command;