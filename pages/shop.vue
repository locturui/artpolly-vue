<template>
  <div class="page-wrapper">
    <section class="shop-page">
      <div class="shop-container">
        <div class="section-header">
          <div class="header-accent"></div>
          <h1>Наша продукция</h1>
          <p class="subtitle">Уникальные керамические изделия ручной работы</p>
        </div>
        
        <div v-if="shopData?.categories && shopData.categories.length > 0">
          <div v-for="category in shopData.categories" :key="category.id" class="category">
            <h3>{{ category.name }}</h3>
            <div class="wrapper">
              <ShopItem 
                v-for="item in category.items" 
                :key="item.id"
                :imgUrl="item.imageUrl"
              >
                <template #name>{{ item.name }}</template>
                <template #price>{{ item.price }} ₽</template>
                <template #content>{{ item.description }}</template>
              </ShopItem>
            </div>
          </div>
        </div>
        
        <div v-else class="empty">
          <p>Загрузка товаров...</p>
        </div>
      </div>
    </section>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

interface ShopItem {
  id: number
  name: string
  price: number
  description: string
  imageUrl: string
}

interface ShopCategory {
  id: number
  name: string
  items: ShopItem[]
}

interface ShopData {
  categories: ShopCategory[]
}

const { data: shopData } = await useFetch<ShopData>('/api/shop')
</script>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.shop-page {
  flex: 1;
  padding: 8em 2em 6em;
  background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 100%);
  position: relative;
  overflow: hidden;
}

.shop-page::before {
  content: '';
  position: absolute;
  top: 10%;
  right: -8%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(139, 115, 85, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.shop-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.section-header {
  text-align: center;
  margin-bottom: 4em;
  position: relative;
  z-index: 10;
}

.header-accent {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  margin: 0 auto 1.5em;
  border-radius: 2px;
}

h1 {
  margin-bottom: 0.5em;
  color: var(--text-primary);
}

.subtitle {
  font-size: 1.1em;
  color: var(--text-secondary);
  font-weight: 400;
  margin-top: 0.8em;
}

.category {
  margin-bottom: 6em;
  position: relative;
  z-index: 10;
}

h3 {
  font-size: 1.8em;
  text-align: center;
  margin-bottom: 2.5em;
  color: var(--primary);
  font-weight: 600;
  position: relative;
}

h3::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  margin: 0.8em auto 0;
  border-radius: 2px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5em;
  max-width: 1000px;
  margin: 0 auto;
}

.empty {
  text-align: center;
  padding: 6em 2em;
}

.empty p {
  font-size: 1.2em;
  color: #666;
}

@media (max-width: 1024px) {
  .wrapper {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2em;
  }
}

@media (max-width: 768px) {
  .shop-page {
    padding: 6em 1.5em 4em;
  }
  
  .section-header {
    margin-bottom: 3em;
  }

  .header-accent {
    width: 60px;
    margin-bottom: 1em;
  }

  .subtitle {
    font-size: 1em;
  }
  
  .category {
    margin-bottom: 4em;
  }
  
  h3 {
    margin-bottom: 1.5em;
    font-size: 1.6em;
  }
  
  .wrapper {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5em;
  }
}

@media (max-width: 480px) {
  .shop-page {
    padding: 5em 1em 3em;
  }

  .section-header {
    margin-bottom: 2.5em;
  }
  
  .shop-page::before {
    display: none;
  }
  
  .wrapper {
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
  
  .category {
    margin-bottom: 3em;
  }
  
  h3 {
    font-size: 1.5em;
  }
}
</style>
