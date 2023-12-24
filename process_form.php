<?php
// تضمين مكتبة PHPExcel
require 'path/to/PHPExcel/autoload.php';

// استخدام فضاء الأسماء المختصر
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

// الحصول على البيانات من النموذج HTML
$studentName = $_POST['studentName'];
$courseName = $_POST['courseName'];
$rating = $_POST['rating'];
$comments = $_POST['comments'];

// إنشاء كائن جديد من فئة Spreadsheet
$spreadsheet = new Spreadsheet();

// حدد ورقة العمل الحالية
$sheet = $spreadsheet->getActiveSheet();

// قم بتحديد البيانات في الخلايا المناسبة
$sheet->setCellValue('A1', 'Student Name');
$sheet->setCellValue('B1', 'Course Name');
$sheet->setCellValue('C1', 'Rating');
$sheet->setCellValue('D1', 'Comments');

$sheet->setCellValue('A2', $studentName);
$sheet->setCellValue('B2', $courseName);
$sheet->setCellValue('C2', $rating);
$sheet->setCellValue('D2', $comments);

// إعداد الملف للتنزيل
$writer = new Xlsx($spreadsheet);
header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment;filename="course_evaluation.xlsx"');
header('Cache-Control: max-age=0');

// إرسال الملف
$writer->save('php://output');
?>
