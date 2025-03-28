import Link from "next/link"
import { ArrowLeft, Code, Database, GitBranch, Globe, Server, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeatureCard } from "@/components/feature-card"
import { HeroSection } from "@/components/hero-section"
import { CodeExample } from "@/components/code-example"
import { Testimonial } from "@/components/testimonial"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-dana">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl font-morabba">
              چرا انسیبل را انتخاب کنیم؟
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              انسیبل یک ابزار اتوماسیون متن‌باز است که وظایف پیچیده را از تهیه ابر و مدیریت پیکربندی تا استقرار برنامه
              ساده می‌کند.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8 mt-12">
            <FeatureCard
              icon={<Server className="h-10 w-10 text-primary" />}
              title="ساده و بدون نیاز به عامل"
              description="نیازی به نصب عامل روی گره‌های مدیریت شده نیست. انسیبل از طریق SSH یا WinRM متصل می‌شود و سبک و امن است."
            />
            <FeatureCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="قابل خواندن برای انسان"
              description="پلی‌بوک‌ها در YAML نوشته می‌شوند، خواندن، نوشتن و نگهداری آنها بدون نیاز به مهارت‌های برنامه‌نویسی تخصصی آسان است."
            />
            <FeatureCard
              icon={<GitBranch className="h-10 w-10 text-primary" />}
              title="ایدمپوتنت"
              description="وظایف اتوماسیون خود را مکرراً با نتایج یکسان اجرا کنید و از وضعیت سیستم سازگار اطمینان حاصل کنید."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="چند پلتفرمی"
              description="لینوکس، ویندوز و دستگاه‌های شبکه را از یک گره کنترل واحد با همان نحو ساده مدیریت کنید."
            />
            <FeatureCard
              icon={<Database className="h-10 w-10 text-primary" />}
              title="ماژول‌های گسترده"
              description="بیش از ۳,۰۰۰ ماژول داخلی برای مدیریت تمام جنبه‌های زیرساخت و برنامه‌های شما."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="آماده برای سازمان‌ها"
              description="با پلتفرم اتوماسیون انسیبل مقیاس‌پذیری کنید و از امنیت، حاکمیت و ویژگی‌های همکاری پیشرفته بهره‌مند شوید."
            />
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl font-morabba">
              انسیبل چگونه کار می‌کند
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              انسیبل از معماری ساده‌ای استفاده می‌کند که درک و پیاده‌سازی آن آسان است.
            </p>
          </div>

          <Tabs defaultValue="playbooks" className="mt-12 max-w-4xl mx-auto" dir="rtl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="playbooks">پلی‌بوک‌ها</TabsTrigger>
              <TabsTrigger value="inventory">فهرست موجودی</TabsTrigger>
              <TabsTrigger value="modules">ماژول‌ها</TabsTrigger>
            </TabsList>
            <TabsContent value="playbooks" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>پلی‌بوک‌ها</CardTitle>
                  <CardDescription>زبان پیکربندی، استقرار و ارکستراسیون انسیبل</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeExample
                    code={`---
# مثال ساده پلی‌بوک
- name: بروزرسانی سرورهای وب
  hosts: webservers
  become: yes
  
  tasks:
  - name: اطمینان از نصب آپاچی
    apt:
      name: apache2
      state: present
      
  - name: اطمینان از اجرای آپاچی
    service:
      name: apache2
      state: started
      enabled: yes`}
                  />
                  <p className="mt-4 text-sm text-muted-foreground text-right">
                    پلی‌بوک‌ها فایل‌های YAML هستند که پیکربندی‌ها، مراحل استقرار و ارکستراسیون را به روشی بیان می‌کنند که هم
                    برای ماشین و هم برای انسان قابل خواندن است.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="inventory" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>فهرست موجودی</CardTitle>
                  <CardDescription>تعریف و سازماندهی گره‌های مدیریت شده</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeExample
                    code={`# مثال فایل فهرست موجودی
[webservers]
web1.example.com
web2.example.com

[dbservers]
db1.example.com
db2.example.com

[production:children]
webservers
dbservers

[webservers:vars]
http_port=80
`}
                  />
                  <p className="mt-4 text-sm text-muted-foreground text-right">
                    فایل‌های فهرست موجودی، میزبان‌ها و گروه‌های میزبان‌هایی را تعریف می‌کنند که دستورات، ماژول‌ها و وظایف در
                    یک پلی‌بوک روی آنها عمل می‌کنند.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="modules" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>ماژول‌ها</CardTitle>
                  <CardDescription>ابزارهای موجود در جعبه ابزار انسیبل شما</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg border p-3 text-right">
                      <h3 className="font-medium">سیستم</h3>
                      <p className="text-sm text-muted-foreground">کاربر، گروه، بسته، سرویس</p>
                    </div>
                    <div className="rounded-lg border p-3 text-right">
                      <h3 className="font-medium">دستورات</h3>
                      <p className="text-sm text-muted-foreground">command، shell، raw، script</p>
                    </div>
                    <div className="rounded-lg border p-3 text-right">
                      <h3 className="font-medium">فایل‌ها</h3>
                      <p className="text-sm text-muted-foreground">copy، file، template، lineinfile</p>
                    </div>
                    <div className="rounded-lg border p-3 text-right">
                      <h3 className="font-medium">ابر</h3>
                      <p className="text-sm text-muted-foreground">aws، azure، gcp، docker، kubernetes</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground text-right">
                    ماژول‌ها واحدهای مجزای کد هستند که می‌توانند از خط فرمان یا در یک وظیفه پلی‌بوک استفاده شوند. انسیبل هر
                    ماژول را در سیستم هدف اجرا می‌کند و مقادیر بازگشتی را جمع‌آوری می‌کند.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl font-morabba">
              مورد اعتماد سازمان‌ها در سراسر جهان
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              از استارتاپ‌ها تا شرکت‌های فورچون ۵۰۰، انسیبل به تیم‌ها کمک می‌کند تا با اطمینان اتوماسیون انجام دهند.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Testimonial
              quote="انسیبل زمان استقرار ما را ۷۵٪ کاهش داده و خطاهای پیکربندی را تقریباً از بین برده است."
              author="سارا چن"
              role="مدیر DevOps، تک‌کورپ"
            />
            <Testimonial
              quote="ما کل زیرساخت ابری خود را با انسیبل خودکار کردیم و ماهانه صدها ساعت مهندسی صرفه‌جویی می‌کنیم."
              author="محمد رضایی"
              role="مدیر فنی، کلاودنیتیو"
            />
            <Testimonial
              quote="سادگی انسیبل باعث شد کل تیم ما بتوانند در اتوماسیون مشارکت کنند، نه فقط متخصصان."
              author="جمال واشنگتن"
              role="مدیر زیرساخت، راهکارهای سازمانی"
            />
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl font-morabba">آماده شروع هستید؟</h2>
            <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
              سفر اتوماسیون خود را امروز با انسیبل آغاز کنید.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://docs.ansible.com/ansible/latest/getting_started/index.html">
                  مطالعه مستندات <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/ansible/ansible">
                  <GitBranch className="ml-2 h-4 w-4" /> مخزن گیت‌هاب
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

