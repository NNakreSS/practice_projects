class Task {
  final String title;
  final String content;
  final String day;
  bool completed;

  Task({
    required this.title,
    required this.content,
    required this.day,
    this.completed = false,
  });
}
