import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _UserInfoState createState() => _UserInfoState();
}

class _UserInfoState extends State<MyApp> {
  bool isVisible = false;

  void setVisibleText(visible) {
    setState(() {
      isVisible = visible;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text(
            'hafta4 Flutter',
            style: TextStyle(color: Colors.white),
          ),
          backgroundColor: Colors.green,
          iconTheme: const IconThemeData(color: Colors.white),
          actions: [
            IconButton(
              icon: const Icon(Icons.search),
              onPressed: () {
                // Ayarlar butonuna basıldığında yapılacak işlemler
              },
            ),
            IconButton(
              icon: const Icon(Icons.settings),
              onPressed: () {
                // Ayarlar butonuna basıldığında yapılacak işlemler
              },
            ),
          ],
        ),
        drawer: Drawer(
          child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              const DrawerHeader(
                decoration: BoxDecoration(
                  color: Colors.green,
                ),
                child: Text(
                  'Drawer Başlık',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                  ),
                ),
              ),
              ListTile(
                title: const Text('item 1'),
                onTap: () {},
              ),
              ListTile(
                title: const Text('item 2'),
                onTap: () {},
              ),
            ],
          ),
        ),
        body: Column(
          children: [
            const Padding(
                padding: EdgeInsets.all(5.0),
                child: Row(
                  children: [
                    Text('Welcomme To My App  !',
                        style: TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                        ))
                  ],
                )),
            Padding(
              padding: const EdgeInsets.all(10.0),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      children: [
                        const Text('Widget 1'),
                        const SizedBox(height: 10),
                        const CircleAvatar(
                          radius: 30,
                          backgroundColor: Colors.green,
                          child: Icon(Icons.person, color: Colors.white),
                        ),
                        const SizedBox(height: 10),
                        ElevatedButton(
                          onPressed: () {
                            // Widget 1 butonuna basıldığında yapılacak işlemler
                            setVisibleText(true);
                          },
                          child: const Text('Open Text'),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: Column(
                      children: [
                        const Text('Widget 2'),
                        const SizedBox(height: 10),
                        const CircleAvatar(
                          radius: 30,
                          backgroundColor: Colors.red,
                          child: Icon(Icons.person, color: Colors.white),
                        ),
                        const SizedBox(height: 10),
                        ElevatedButton(
                          onPressed: () {
                            // Widget 1 butonuna basıldığında yapılacak işlemler
                            setVisibleText(false);
                          },
                          child: const Text('Close Text'),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: EdgeInsets.all(10.0),
              child: Column(
                children: [
                  const Row(
                    children: [
                      Text(
                        "Açıklama : ",
                        style: TextStyle(
                            fontSize: 28, fontWeight: FontWeight.bold),
                      )
                    ],
                  ),
                  Visibility(
                      visible: isVisible,
                      child: const Row(
                        children: [Text("Bu benim ilk mobil projem")],
                      ))
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
