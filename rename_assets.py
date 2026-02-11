import os
import shutil

public_dir = 'public'
folders = [f for f in os.listdir(public_dir) if f.startswith('reference ')]

for folder in folders:
    num = folder.split(' ')[1]
    old_path = os.path.join(public_dir, folder)
    new_folder_name = f'v{num}'
    new_path = os.path.join(public_dir, new_folder_name)
    
    if os.path.exists(new_path):
        # Move files from old_path to new_path
        for f in os.listdir(old_path):
            shutil.move(os.path.join(old_path, f), os.path.join(new_path, f))
        target_folder = new_path
    else:
        os.rename(old_path, new_path)
        target_folder = new_path

    # Rename files in the target folder to be named image1, image2, etc.
    # First, rename everything to a temporary name to avoid collisions
    files = sorted([f for f in os.listdir(target_folder) if os.path.isfile(os.path.join(target_folder, f))])
    
    temp_files = []
    for i, filename in enumerate(files, 1):
        ext = os.path.splitext(filename)[1]
        old_file_path = os.path.join(target_folder, filename)
        temp_file_path = os.path.join(target_folder, f'__temp_image{i}{ext}')
        os.rename(old_file_path, temp_file_path)
        temp_files.append(temp_file_path)

    for i, temp_file_path in enumerate(temp_files, 1):
        ext = os.path.splitext(temp_file_path)[1]
        # Remove the __temp_ prefix
        new_filename = f'image{i}{ext.replace("__temp_", "")}' # wait ext doesn't have it
        new_filename = f'image{i}{ext[7:] if ext.startswith(".__temp") else ext}' # fix logic
        
        # Simpler:
        ext = os.path.splitext(temp_file_path)[1]
        final_ext = ext.replace('.__temp_image', '') # This is getting messy, let's simplify
