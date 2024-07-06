import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:test_projem/models/tasks_modal.dart';

void main() => runApp(const WeeklyPlannerApp());

class WeeklyPlannerApp extends StatelessWidget {
  const WeeklyPlannerApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => TaskProvider(),
      child: MaterialApp(
        initialRoute: '/home',
        routes: {
          "/home": (context) => HomePage(),
          "/tasks": (context) => const TasksPage(),
        },
        title: "Weekly Planner App",
        debugShowCheckedModeBanner: false,
        themeMode: ThemeMode.dark, // Set the default to dark mode
        theme: ThemeData(
          appBarTheme: const AppBarTheme(
            backgroundColor:
                Colors.orange, // Default olarak AppBar'ın arka plan rengi
            titleTextStyle: TextStyle(
              color: Colors.white, // Default olarak AppBar'ın metin rengi
              fontSize: 22.0,
              fontWeight: FontWeight.bold,
            ),
          ),
          primaryColor: Colors.blue, // Default olarak uygulamanın tema rengi
        ),
        darkTheme: ThemeData.dark().copyWith(
          appBarTheme: const AppBarTheme(
            backgroundColor:
                Colors.black, // Dark modda AppBar'ın arka plan rengi
            titleTextStyle: TextStyle(
              color: Colors.white, // Dark modda AppBar'ın metin rengi
              fontSize: 22.0,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        home: HomePage(),
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  final List<String> weakly = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
  ];

  HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Haftalık Program")),
      body: ListView.builder(
        itemCount: weakly.length,
        itemBuilder: (context, index) {
          final day = weakly[index];
          return ListTile(
            title: Text(day),
            leading: const Icon(Icons.calendar_month),
            onTap: () {
              Navigator.pushNamed(context, "/tasks", arguments: day);
            },
          );
        },
      ),
    );
  }
}

class TasksPage extends StatelessWidget {
  const TasksPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final String day = ModalRoute.of(context)!.settings.arguments as String;
    final taskProvider = Provider.of<TaskProvider>(context);
    final dayTasks =
        taskProvider.tasks.where((task) => task.day == day).toList();

    Widget bodyWidget = dayTasks.isEmpty
        ? const Center(
            child: Text(
              "Bu güne özel bir plan yok",
              style: TextStyle(fontSize: 18),
            ),
          )
        : ListView.builder(
            itemCount: dayTasks.length,
            itemBuilder: (context, index) {
              final task = dayTasks[index];
              return ListTile(
                title: Text(task.title),
                subtitle: Text(task.content),
              );
            },
          );

    return Scaffold(
      appBar: AppBar(title: Text(day)),
      body: Column(
        children: [
          Expanded(child: bodyWidget),
          ElevatedButton(
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all<Color>(Colors.black),
              iconColor: MaterialStateProperty.all<Color>(Colors.greenAccent),
            ),
            onPressed: () {
              showDialog(
                context: context,
                builder: (BuildContext context) {
                  return AlertDialog(
                    title: const Text("Yeni Plan Ekle"),
                    content: Consumer<TaskProvider>(
                      builder: (context, taskProvider, child) {
                        return Form(
                          key: taskProvider.formKey,
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              TextFormField(
                                controller: taskProvider.titleController,
                                decoration:
                                    const InputDecoration(labelText: 'Başlık'),
                                validator: (value) {
                                  if (value == null || value.isEmpty) {
                                    return 'Başlık boş olamaz';
                                  }
                                  return null;
                                },
                              ),
                              TextFormField(
                                controller: taskProvider.contentController,
                                decoration:
                                    const InputDecoration(labelText: 'Plan'),
                                validator: (value) {
                                  if (value == null || value.isEmpty) {
                                    return 'İçerik boş olamaz';
                                  }
                                  return null;
                                },
                              ),
                            ],
                          ),
                        );
                      },
                    ),
                    actions: [
                      ElevatedButton(
                        onPressed: () {
                          if (taskProvider.formKey.currentState!.validate()) {
                            taskProvider.addTask(day);
                            Navigator.of(context).pop();
                          }
                        },
                        child: const Text('Ekle'),
                      ),
                      ElevatedButton(
                        onPressed: () {
                          Navigator.of(context).pop();
                        },
                        child: const Text('İptal'),
                      ),
                    ],
                  );
                },
              );
            },
            child: const Icon(Icons.add_box),
          )
        ],
      ),
    );
  }
}

class TaskProvider with ChangeNotifier {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  final TextEditingController titleController = TextEditingController();
  final TextEditingController contentController = TextEditingController();
  List<Task> tasks = [];

  void addTask(String day) {
    Task newTask = Task(
      title: titleController.text,
      content: contentController.text,
      day: day,
    );
    tasks.add(newTask);
    notifyListeners();
  }
}
