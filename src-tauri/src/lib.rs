use std::fs;
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[tauri::command]
fn read_file(path: String) -> String {
    fs::read_to_string(path).unwrap()
}

#[tauri::command]
fn write_file(path: String, contents: String) {
    fs::write(path, contents).unwrap();
}

#[tauri::command]
fn list_dir(path: String) -> Vec<String> {
    let mut entries = Vec::new();
    let read_dir = fs::read_dir(path).unwrap();

    for entry in read_dir {
        let dir_entry = entry.unwrap();
        entries.push(dir_entry.path().display().to_string());
    }

    entries
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![read_file, write_file, list_dir])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
